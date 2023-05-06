import { Layout, Menu } from "antd";
import { BiRecycle, BiUser, BiVideo } from "react-icons/bi";
import type { MenuProps } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

interface Isidebar {
  collapsed: boolean;
}

function getItem(
  label: React.ReactNode,
  key?: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items2: MenuItem[] = [
  getItem("Home", "/admin", <BiUser />),
  getItem("Image", "sub-1", <BiVideo />, [
    getItem("View Image", "/admin/image"),
    getItem("Add Image", "/admin/image/add"),
  ]),
  getItem("Video", "sub-2", <BiVideo />, [
    getItem("View Video", "/admin/video"),
    getItem("Add Video", "/admin/video/add"),
  ]),
  getItem("Site", "/", <BiRecycle />),
];

const Sidebar = (props: Isidebar) => {
  const { collapsed } = props;
  const navigate = useNavigate();

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className=" h-[50px] my-3 mx-auto bg-gray-200 w-4/5" />
      <Menu
        theme="dark"
        mode="inline"
        onClick={(path) => {
          navigate(path.key);
        }}
        defaultSelectedKeys={["home"]}
        items={items2}
      />
    </Sider>
  );
};

export default Sidebar;
