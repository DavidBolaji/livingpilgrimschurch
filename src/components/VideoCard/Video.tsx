// import styled from '@emotion/styled';
import styled from "@emotion/styled";
import React, { useCallback, useEffect } from "react";
import Layout from "../Layout/Layout";
import VideoCard from "./VideoCard";
import { IVid, videos } from "./Data";
import useFetch from "../../hooks/useFetch";
import https from "../../api/http";
import { Pagination, PaginationProps } from "antd";
// import PsLogo from "../../assets/images/psillo.png";
// import {  Button } from 'antd';
interface IClip {
  _id: string;
  video: string;
  public_id: string;
}

const StyleVideoCont = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 50px;
  column-gap: 10px;

  @media (max-width: 938px) {
    display: grid;
    /* flex-wrap: wrap; */
    background-color: aliceblue;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 50px;
    /* column-gap: 10px; */
  }
`;

const Video = () => {
  const { data, action } = useFetch();

  const fetch = useCallback(() => {
    action({
      request: https.get,
      path: `/videos?&page=1&pageSize=10`,
      obj: {},
    });
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetch();
    //eslint-disable-next-line
  }, []);

  const onChange: PaginationProps["onChange"] = (page, pageSize) => {
    action({
      request: https.get,
      path: `/videos?&page=${page}&pageSize=${pageSize}`,
      obj: {},
    });
  };

  if (data) {
    const newData: IClip[] = data.data;
    const imageData: IVid[] = newData.map((el) => {
      return {
        video: el.video,
      };
    });
    const all = [...imageData, ...videos];
    return (
      <Layout bg={"#e9f7f1"} color={"#000"} heading={"Videos"} id={"Messages"}>
        <StyleVideoCont>
          {all.map((video, ind) => {
            return (
              <VideoCard data="fade-up" key={video.video} url={video.video} />
            );
          })}
        </StyleVideoCont>
        <div className="flex justify-center mt-10">
          <Pagination
            showSizeChanger={true}
            onShowSizeChange={onChange}
            defaultCurrent={1}
            total={all.length}
          />
        </div>
      </Layout>
    );
  }

  return (
    <Layout bg={"#e9f7f1"} color={"#000"} heading={"Videos"} id={"Messages"}>
      <StyleVideoCont>
        {videos.map((video, ind) => {
          return (
            <VideoCard data="fade-up" key={video.video} url={video.video} />
          );
        })}
      </StyleVideoCont>
    </Layout>
  );
};

export default Video;
