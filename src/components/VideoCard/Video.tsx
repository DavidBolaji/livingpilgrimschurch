// import styled from '@emotion/styled';
import styled from "@emotion/styled";
import React from "react";
import Layout from "../Layout/Layout";
import VideoCard from "./VideoCard";
// import PsLogo from "../../assets/images/psillo.png";
// import {  Button } from 'antd';

const StyleVideoCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 90%;
  /* text-align: left; */
  vertical-align: center;
  align-self: center;
  justify-content: center;
  align-items: flex-start;

  gap: 30px;

  > * {
    flex-basis: 0 0 33.33%;
    /* vertical-align: center; */
    align-self: flex-start;
  }

  @media (max-width: 938px) {
    justify-content: center;
    align-items: center;
  }
`;

const Video = () => {
  return (
    <Layout bg={"#e9f7f1"} color={"#000"} heading={"Videos"} id={"Messages"}>
      <StyleVideoCont>
        <VideoCard
          data="fade-up"
          url={
            "https://res.cloudinary.com/dpi44zxlw/video/upload/v1672357789/320126638_826517348446191_1195080636727819656_n_agja4f.mp4"
          }
        />
        <VideoCard url="https://res.cloudinary.com/dpi44zxlw/video/upload/v1672356747/322307310_176012935040347_7918079026087355917_n_tgiw9u.mp4" />
        <VideoCard url="https://res.cloudinary.com/dpi44zxlw/video/upload/v1672398679/10000000_507927247866055_8949269750556364856_n_awaezh.mp4" />
        {/* <VideoCard url="../../assets/videos/vid.mp4" /> */}
        {/* <VideoCard /> */}
        {/* <VideoCard /> */}
      </StyleVideoCont>
    </Layout>
  );
};

export default Video;
