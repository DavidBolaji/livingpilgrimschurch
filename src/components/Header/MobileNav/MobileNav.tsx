import { Drawer } from "antd";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import styled from "@emotion/styled";
import lppmLogo from "../../../assets/images/lppmlogo.png";
import FadeIn from "react-fade-in";
import "./MobileNav.css";
import { RxCaretRight } from "react-icons/rx";

const StyledDrawer = styled(Drawer)`
  .ant-drawer-header-title {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const Logo = () => {
  return <img src={lppmLogo} alt="logo" />;
};

const navData = [
  {
    id: "n1",
    text: "Home",
    link: "/#Home",
  },
  {
    id: "n3",
    text: "About Us",
    link: "/#About",
  },
  {
    id: "n5",
    text: "Gallery",
    link: "/#Gallery",
  },
  {
    id: "n6",
    text: "Videos",
    link: "/#Messages",
  },
  // {
  //   id: "n7",
  //   text: "Testimonies",
  //   link: "/#Testimony",
  // },
  // {
  //   id: "n2",
  //   text: "Branches",
  //   link: "/branch",
  //   sub: [
  //     {
  //       gid: "n2",
  //       id: "s1",
  //       text: "HQ",
  //       link: "/home",
  //     },
  //     {
  //       gid: "n2",
  //       id: "s2",
  //       text: "Nagazi",
  //       link: "/nagazi",
  //     },
  //   ],
  // },

  // {
  //   id: "n4",
  //   text: "Contact Us",
  //   link: "/contact",
  // },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState("");
  const [active, setActive] = useState("");
  const showMenu = (id: string) => {
    if (visible === "") {
      setVisible(id);
      setActive(id);
    } else if (visible === id) {
      setVisible("");
      setActive("");
    } else {
      setVisible(id);
      setActive(id);
    }
  };

  const renderNav = navData.map((nav: any) => {
    return (
      <div className="mobile-nav-link-cont" key={nav?.id}>
        {/* {nav?.sub?.length < 1 && <a to={nav?.link}>{nav?.text}</a>} */}
        <>
          {nav?.sub?.length > 0 ? (
            <div
              key={nav.id}
              className="mobile-nav-link-dropdown"
              onClick={() => {
                showMenu(nav?.id);
                setOpen(false);
              }}
            >
              <div>
                <a className="mobile-link" href="/">
                  {nav?.text}
                </a>
              </div>
              <div>
                <RxCaretRight />
              </div>
            </div>
          ) : (
            <a
              className="mobile-link"
              href={nav?.link}
              onClick={() => setOpen(false)}
            >
              {nav?.text}
            </a>
          )}
        </>
        <ul>
          {nav?.sub &&
            visible === nav?.sub[0]?.gid &&
            nav?.sub?.map((item: any) => (
              <FadeIn>
                <li
                  className={`sub-link ${active === visible && "active"}`}
                  key={item.id}
                >
                  <a href={item.link}>{item.text}</a>
                </li>
              </FadeIn>
            ))}
        </ul>
      </div>
    );
  });

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="mobile">
      <div className="mobile-logo">
        <Logo />
      </div>
      <div className="mobile-menu">
        {/* <div className="mobile-menu-search">
          <BiSearch />
        </div> */}
        <div className="mobile-menu-slider" onClick={() => setOpen(true)}>
          <BiMenuAltRight />
        </div>
        <StyledDrawer
          title={<Logo />}
          placement="left"
          onClose={onClose}
          open={open}
        >
          <>
            {renderNav}
            {/* <a className="mobile-link" to={'/'}>
            Donate
          </a> */}
          </>
        </StyledDrawer>
      </div>
    </div>
  );
};

export default MobileNav;
