import React from "react";
import { Avatar, Layout, Menu } from "antd";

import MenuBar from "../common/MenuBar";

import styles from "./style.module.less";

interface Props {}

const HeaderBar: React.FunctionComponent<Props> = ({}) => {
  const { Header } = Layout;
  const userInfo = (
    <div className={`${styles.headerBar}`}>
      <Avatar icon="user" />
      <span className="text-white">7Mouse</span>
    </div>
  );

  // const menuBar = (
  //   <div>
  //     <Menu>
  //       <Menu.Item>111</Menu.Item>
  //       <Menu.Item>222</Menu.Item>
  //       <Menu.Item>333</Menu.Item>
  //     </Menu>
  //   </div>
  // );

  return (
    <div className="flex flex-row justify-between items-center bg-gray-500 h-60px">
      {userInfo}
      <MenuBar
        menuItems={[
          {
            name: "博客",
            linkTo: "/",
            childMenuItems: [
              { name: "标签", linkTo: "/" },
              { name: "分类", linkTo: "/" }
            ]
          }
        ]}
      />
    </div>
  );
};

export default HeaderBar;
