import React, { useState } from "react";
import { Layout, Button, theme } from "antd";
import Sidebar from "./Sidebar";
import { BiMenu } from "react-icons/bi";
import { Outlet } from "react-router-dom";

const { Header, Content } = Layout;

const Root: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <BiMenu /> : <BiMenu />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
            minHeight: "80vh",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default React.memo(Root);
