import React from "react";
import { Avatar, Layout, Menu } from "antd";
import HeaderBar from "../components/HeaderBar";
import SiderBar from "../components/common/SiderBar";

const Home: React.FunctionComponent = () => {
  const { Header, Content, Footer, Sider } = Layout;
  return (
    <>
      <HeaderBar />
    </>
  );
};

export default Home;
