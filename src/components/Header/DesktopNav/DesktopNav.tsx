import styled from "@emotion/styled";
import React, { useState } from "react";
import { Logo } from "../MobileNav/MobileNav";

const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  transform: scale(0.8);
  gap: 10px;
`;

/* background-color: ${(props) => props.theme.navbg}; */
const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  color: #fff;
  background-color: #031d37;
  padding: auto 80px;

  .green {
    color: #00a359;
  }

  @media (max-width: 810px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const DesktopNav = () => {
  const [current, setCurrent] = useState("");
  const [active, setActive] = useState("Home");

  const handleMouse = (val: any) => {
    setCurrent(val);
  };
  return (
    <StyledNav>
      <LogoSection className="white">
        <Logo />
      </LogoSection>

      <ul className="flex white none">
        <li
          className={active === "Home" ? "green" : ""}
          onClick={() => setActive("Home")}
          onMouseEnter={() => handleMouse("Home")}
          onMouseLeave={() => handleMouse("")}
        >
          <a href="/#Home">
            {current === "Home" || active === "Home" ? "Home" : "Home"}
          </a>
        </li>
        <li
          className={active === "About" ? "green" : ""}
          onClick={() => setActive("About")}
          onMouseEnter={() => handleMouse("About")}
          onMouseLeave={() => handleMouse("")}
        >
          <a href="/#About">
            {current === "About" || active === "About" ? "About" : "About"}
          </a>
        </li>
        <li
          className={active === "Gallery" ? "green" : ""}
          onClick={() => setActive("Gallery")}
          onMouseEnter={() => handleMouse("Gallery")}
          onMouseLeave={() => handleMouse("")}
        >
          <a href="/#Gallery">
            {current === "Gallery" || active === "Gallery"
              ? "Gallery"
              : "Gallery"}
          </a>
        </li>
        <li
          className={active === "Messages" ? "green" : ""}
          onClick={() => setActive("Messages")}
          onMouseEnter={() => handleMouse("Messages")}
          onMouseLeave={() => handleMouse("")}
        >
          <a href="/#Messages">
            {current === "Messages" || active === "Messages"
              ? "Messages"
              : "Messages"}
          </a>
        </li>
        <li
          className={active === "Testimony" ? "green" : ""}
          onClick={() => setActive("Testimony")}
          onMouseEnter={() => handleMouse("Testimony")}
          onMouseLeave={() => handleMouse("")}
        >
          <a href="/#Testimony">
            {current === "Tesimony" ? "Testimony" : "Testimony"}
          </a>
        </li>
      </ul>
    </StyledNav>
  );
};

export default DesktopNav;
