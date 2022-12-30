import React, { useState } from "react";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";

const Header = () => {
  const [screen,setScreen] = useState(window.screen.width);

  React.useEffect(() => {
    const resize = () => setScreen(window.screen.width);

    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  },[])


  return screen > 810 ? <DesktopNav /> : <MobileNav />;
};

export default Header;
