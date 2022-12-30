import { Carousel } from "antd";
import React from "react";
import MsSillo from "../../assets/images/msillorm.png";
import PsSillo from "../../assets/images/psillo.png";

const contentStyle: React.CSSProperties = {
  // height: "400px",
  color: "#fff",
  // background-color: #000,
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Hero = () => {
  return (
    <Carousel autoplay>
      <div style={contentStyle} className="carou1" id="Home">
        <div>
          <h3 style={{ textAlign: "center" }}>
            <span className="italics">Come and Experience the</span>
            <br />
            <span className="heavy">miraculous power of God at work</span>

            <span className="yellow"></span>
            <br />
            <span className="gothic">Living Pilgrims Church</span>
            <br />
          </h3>
        </div>
        <img src={PsSillo} alt={"pastor sillo"} className="sillo" />
        <img src={MsSillo} alt={"pastor Mrs sillo"} className="silloM" />
      </div>
      <div style={contentStyle} className="carou2">
        <div>
          <h3 style={{ textAlign: "center" }}>
            <span className="italics">Motto</span>
            <br />
            <span className="heavy">Making Christ Known</span>

            <span className="yellow"></span>
            <br />
            <span className="gothic">Living Pilgrims Church</span>
            <br />
          </h3>
        </div>
        <img src={PsSillo} alt={"pastor sillo"} className="sillo" />
        <img src={MsSillo} alt={"pastor Mrs sillo"} className="silloM" />
      </div>
      {/* <div style={contentStyle} className="carou3">
        <h3>3</h3>
      </div> */}
      {/* <div>
        <h3 style={contentStyle}>4</h3>
      </div> */}
    </Carousel>
  );
};

export default Hero;
