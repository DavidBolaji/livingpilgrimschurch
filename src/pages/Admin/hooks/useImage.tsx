import { useEffect, useState, useCallback } from "react";
import https from "../../../api/http";

export interface Iimage {
  _id: string;
  asset_id: string;
  public_id: string;
  image?: string;
  video?: string;
}

const useImage = (page: number, pageSiz: number, path: string) => {
  const [imagez, setImagez] = useState<Iimage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(page);
  const [pageSize, setPageSize] = useState<number>(pageSiz);
  const [total, setTotal] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const fetchData = (page: number, pageSize: number) => {
    // console.log("trigger");
    setCount((prev) => prev + 1);
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const fetchApi = useCallback(async (page: number, pageSize: number) => {
    // This is where you would make an API call to fetch data for the current page and page size
    // You can update the `dataSource` and `pagination` state variables based on the response
    setLoading((prev) => !prev);
    // Example API call using fetch:
    // ?page=${page}&limit=${pageSize}
    const req = await https.get(`/${path}`);

    if (req.status === 200) {
      setImagez([...req.data.data]);
      setCurrentPage(page);
      setTotal(req.data.data.totalCount);
      setLoading((prev) => !prev);
    } else {
      console.log("Something went wrong");
      setCount((prev) => prev + 1);
      setLoading((prev) => !prev);
    }
  }, []);

  useEffect(() => {
    fetchApi(page, pageSize);
  }, [page, pageSize, count]);

  return { imagez, loading, total, pageSize, currentPage, fetchData };
};

export default useImage;
