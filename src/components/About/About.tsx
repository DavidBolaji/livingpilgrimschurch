import styled from "@emotion/styled";
import Layout from "../Layout/Layout";
import PsLogo from "../../assets/images/psillo.png";
import { Button, Drawer, Space } from "antd";
import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const StyledDrawer = styled(Drawer)`
  background-color: #0a2540 !important;
  .ant-drawer-header-title {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  .ant-drawer-close {
    /* display: none; */
    color: white;
  }
`;

const StyledAboutRight = styled.div`
  flex: 1;
  /* justify-content: flex-start; */
  height: auto;
  margin: auto;
  align-items: stretch;

  h1 {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-weight: 500;
    font-size: 2rem;
    color: #000;
  }
  h3 {
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 1.5rem;
    text-align: justify;
    color: #fff;
  }
  p {
    font-weight: 500;
    font-size: 1rem;
    text-align: justify;
    max-width: 600px;
    color: #fff;
    line-height: 2.2rem;
  }
  .partners {
    padding-top: 5rem;
  }
  h5 {
    color: #777777;
  }
  @media (max-width: 810px) {
    margin-top: 0px;
  }
`;

const StyledFlex = styled.div`
  display: flex;
  gap: 100px;
  /* justify-content: space-between; */
  flex-direction: row-reverse;

  .flex-full {
    align-items: center;
    justify-content: center;
    display: flex;
    transform: scale(1.4) translateY(-10px);
    /* background-color: red; */
    /* max-width: 400px; */
  }

  > * {
    flex: 0.5;
    /* flex-basis: 50%; */
  }

  @media (max-width: 810px) {
    flex-direction: column;
    transform: translateY(40px);

    .flex-full {
      transform: scale(1.1);
    }
  }
`;

const About = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Layout bg={"#0a2540"} color={"#fff"} heading={"About Us"} id={"About"}>
      <StyledFlex>
        <div className="wow slideInLeft flex-full">
          <img src={PsLogo} alt={"pic"} />
          {/* <Avatar src={PsLogo} size={200}></Avatar> */}
        </div>

        <StyledAboutRight data-aos={"fade-up"} data-aos-duration={1500}>
          <h3 data-aos={"fade-up"} className="wow slideInLeft">
            Welcome to Living Pilgrims Church
            <br />
            (one Church, many locations)
          </h3>
          <p>
            Living Pilgrims Pentecostal Ministries is a church headquartered in
            Itakpe, Camp 1, National Iron Ore Mining Company’s Staff Quarters,
            Kogi State, Nigeria, with Pastor Christopher Omatsola Sillo as the
            General Overseer.
            <br />
            <br />
            We have four other parishes located in Kogi State and a parish
            located in Gwagwalada. Living Pilgrims Pentecostal Ministry is
            committed to Making Christ Known to fulfill the Great commission
            within Nigeria and beyond as commanded by our risen Lord and Saviour
            Jesus Christ ( Mathew 28:19-20, Mark 16:15-20)
            <br />
            <br />
            <Button style={{ color: "#fff" }} onClick={() => setOpen(true)}>
              Read More
            </Button>
          </p>
        </StyledAboutRight>
      </StyledFlex>
      <StyledDrawer
        open={open}
        onClose={() => setOpen(false)}
        footer={
          <Space
            size={30}
            style={{
              textAlign: "center",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaFacebook size={30} />
            <HiMail size={30} />
            <FaYoutube size={30} />
          </Space>
        }
      >
        <StyledAboutRight data-aos={"fade-up"} data-aos-duration={1500}>
          <h3>
            Welcome to Living Pilgrims Church
            <br />
            (one Church, many locations)
          </h3>
          <p>
            Living Pilgrims Pentecostal Ministries is a church headquartered in
            Itakpe, Camp 1, National Iron Ore Mining Company’s Staff Quarters,
            Kogi State, Nigeria, with Pastor Christopher Omatsola Sillo as the
            General Overseer.
            <br />
            <br />
            We have four other parishes located in Kogi State and a parish
            located in Gwagwalada. Living Pilgrims Pentecostal Ministry is
            committed to Making Christ Known to fulfill the Great commission
            within Nigeria and beyond as commanded by our risen Lord and Saviour
            Jesus Christ ( Mathew 28:19-20, Mark 16:15-20)
            <br />
            <br />
          </p>
          <h3>VISION/ AIMS AND OBJECTIVE</h3>
          <p>
            To create awareness about the soon coming of the LORD JESUS CHRIST
            to reign over the nations and to get as many people as possible
            rapturable and continuously ready for the rapture in Nigeria, Africa
            and other parts of the world.
            <br />
            <br />
            To foster unity among Christians and to eradicate partisanship in
            relationship with Christian denominations. TENETS OF OUR FAITH.
            <br />
            <br />
            We preach Christ’s birth, work, teaching, crucifixion, resurrection
            ascension, second coming, millennial reign, white throne judgment,
            new heaven and new birth We believe in Divine Trinity- three
            separate, distinct and recognizable personalities and qualities
            perfectly united in one
          </p>
        </StyledAboutRight>
      </StyledDrawer>
    </Layout>
  );
};

export default About;
