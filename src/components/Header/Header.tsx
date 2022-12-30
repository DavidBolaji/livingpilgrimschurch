import { Grid } from "antd";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";
const { useBreakpoint } = Grid;

const Header = () => {
  const screens = useBreakpoint();

  return screens.sm ? <DesktopNav /> : <MobileNav />;
};

export default Header;
