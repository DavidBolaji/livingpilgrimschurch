import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Header/MobileNav/MobileNav";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import "./index.css";

const locatioData = [
  {
    id: "m1",
    logo: <HiOutlineLocationMarker />,
    text: "P.O.BOX 2, LIVING PILGRIMS PENTECOSTAL MINISTRY, NIOMCO SECONDARY SCHOOL ROAD, EIKA CAMP, ITAKPE-OKENE, KOGI STATE.",
  },
  {
    id: "m2",
    logo: <BsPhone />,
    text: "(+24) 810 748 3900",
  },
  {
    id: "m3",
    logo: <AiOutlineMail />,
    text: "info@lppm.ng",
  },
];

const programData = [
  {
    id: "p1",
    day: "Sunday",
    event: "One Service",
    time: "9:00am-12:00pm",
  },
  {
    id: "p2",
    day: "Tuesday",
    event: "Prayer Meeting",
    time: "5:00pm-6:00pm",
  },
  {
    id: "p5",
    day: "1st Thursday",
    event: "House Fellowship",
    time: "5:30pm-7:30pm",
  },
  {
    id: "p3",
    day: "Thursday",
    event: "Bible Study",
    time: "5:00pm-6:30pm",
  },
  {
    id: "p4",
    day: "3rd Saturday",
    event: "Divine Intervention",
    time: "8:00am-10:00am",
  },
];

const Footer = () => {
  const infoList = locatioData?.map((location) => {
    return (
      <div className="footer-contact-location" key={location.id}>
        <div className="footer-contact-location-icon">{location.logo}</div>
        <div className="footer-contact-location-text">{location.text}</div>
      </div>
    );
  });

  const programs = programData.map((program) => {
    return (
      <div className="footer-three-service" key={program.id}>
        <h4>{program.day}</h4>
        <div className="footer-three-service-cont">
          <div className="footer-three-service-cont-prog">{program.event}</div>
          <div className="footer-three-service-cont-time">{program.time}</div>
        </div>
      </div>
    );
  });
  return (
    <footer className="footer">
      <div className="footer-one">
        <div className="footer-contact">
          <h3 className="footer-contact-heading footer-heading">
            Get in touch
          </h3>

          {infoList}
        </div>
        <div className="footer-logo">
          <Logo />
        </div>
      </div>
      <div className="footer-two">
        <h3 className="footer-heading">Quick links</h3>
        <div>
          <Link to={"/home"}>Home</Link>
        </div>
        <div>
          <Link to={"/about"}>About us</Link>
        </div>
        <div>
          <Link to={"/contact"}>Contact us</Link>
        </div>
        <div>
          <Link to={"/gllery"}>Gallery</Link>
        </div>
        <div>
          <Link to={"/videos"}>Videos</Link>
        </div>
        <div>
          <Link to={"/Donate"}>Donate</Link>
        </div>
      </div>
      <div className="footer-three">
        <h3 className="footer-heading">Service days</h3>
        {programs}
      </div>
    </footer>
  );
};

export default Footer;
