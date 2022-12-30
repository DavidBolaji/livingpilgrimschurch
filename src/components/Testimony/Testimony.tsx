import React from "react";
// import styled from "styled-components";
import styled from "@emotion/styled";
import { Carousel } from "antd";
import Layout from "../Layout/Layout";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const AboutStyled = styled.div`
  /* padding-bottom: 100px; */
  text-align: center;

  .left {
    position: absolute;
    top: 0;
    left: -30px;
  }

  @media (max-width: 810px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 40px;
    height: auto;
    text-align: center;

    .left {
      position: absolute;
      top: 0;
      left: 0px;
    }
  }
`;

const StyledAboutLeft = styled.div`
  display: flex !important;
  height: 400px;
  align-items: flex-start;
  justify-content: center;

  h3 {
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 20px;
    max-width: 400px;
    text-transform: capitalize;
  }

  p {
    font-size: 16px;
    max-width: 500px;
    color: #fff;
    line-height: 1.5rem;
    margin-bottom: 30px;
  }

  em {
    margin-top: -80px;
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: 800;
    color: #fff;
    display: inline-block;
  }

  span {
    margin-top: 35px;
    font-weight: 800;
    color: #fff;
    display: inline-block;
  }

  .testimony {
    color: #fff;
    font-size: 20px;
    font-family: oregano;
  }

  @media (max-width: 810px) {
    flex-direction: column-reverse;
    height: auto;
    gap: 20px;
    /* width: 250px;
        margin: auto; */

    h3 {
      margin: auto;
    }

    .one {
      height: 360px;
      /* width: 250px; */
      margin: auto;
    }
  }
`;

/* color: ${(props) => props.theme.textbg}; */

const dataHash = [
  {
    id: "t1",
    title: "Divine Protection",
    text: "i thank God for his care over my children especially my eldest son. in April, my husband and my eldest son had an attack on their health with stomach ache.they were prayed for and i thank God for his divine intervention.no more stomach ache.praise the Lord",
    author: "sis R.E",
  },
  {
    id: "t2",
    title: "Provision",
    text: "i thank God for his care over my children especially my eldest son. in April, my husband and my eldest son had an attack on their health with stomach ache.they were prayed for and i thank God for his divine intervention.no more stomach ache.praise the Lord",
    author: "sis S.E",
  },
  {
    id: "t3",
    title: "Promotion",
    text: "i thank God for his care over my children especially my eldest son. in April, my husband and my eldest son had an attack on their health with stomach ache.they were prayed for and i thank God for his divine intervention.no more stomach ache.praise the Lord",
    author: "sis B.E",
  },
];

export default function Testimony() {
  return (
    <Layout
      bg={"#0a2540"}
      color={"#fff"}
      heading={"Testimonies"}
      id={"Testimony"}
    >
      <AboutStyled id="project">
        <Carousel autoplay>
          {dataHash?.map((data) => {
            return (
              <StyledAboutLeft key={data.id}>
                <div className="one">
                  <em>{data.title}</em>
                  <div
                    className="testimony"
                    style={{ position: "relative", maxWidth: 500 }}
                  >
                    <ImQuotesLeft className="left" color={"#00a359"} />
                    {data.text}
                    <ImQuotesRight
                      style={{ position: "absolute", bottom: 0, right: "10px" }}
                      color={"#00a359"}
                    />
                  </div>
                  <span>{data.author}</span>
                </div>
              </StyledAboutLeft>
            );
          })}
        </Carousel>
        {/* </div> */}
      </AboutStyled>
    </Layout>
  );
}
