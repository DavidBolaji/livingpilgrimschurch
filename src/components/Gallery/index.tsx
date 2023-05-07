import ImageGallery from "react-image-gallery";
import Layout from "../Layout/Layout";
import "./index.css";
import useFetch from "../../hooks/useFetch";
import { useEffect, useCallback } from "react";
import https from "../../api/http";
import { IImage, images } from "./Data";
import { message } from "antd";

interface IGallery {
  _id: string;
  image: string;
  public_id: string;
}

const Gallery = () => {
  const { errorMessage, error, data, action, success } = useFetch();

  const fetch = useCallback(() => {
    action({
      request: https.get,
      path: `/images`,
      obj: {},
    });
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetch();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (error) {
      message.error("Error fetching images: " + errorMessage);
    }

    if (success) {
      message.success("fetch succesfull ");
    }
  }, [error, errorMessage, success]);

  if (data) {
    const newData: IGallery[] = data.data;
    const imageData: IImage[] = newData.map((el) => {
      return {
        thumbnail: el.image,
        original: el.image,
      };
    });
    return (
      <Layout heading={"Gallery"} bg={"#fff"} id={"Gallery"}>
        <div className="gallery">
          <ImageGallery items={[...imageData, ...images]} />
        </div>
      </Layout>
    );
  }

  return (
    <Layout heading={"Gallery"} bg={"#fff"} id={"Gallery"}>
      <div className="gallery">
        <ImageGallery items={images} />
      </div>
    </Layout>
  );
};

export default Gallery;
