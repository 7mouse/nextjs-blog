import React, { ReactNode } from "react";
import { Layout } from "antd";

interface Props {
  children: ReactNode;
}

const SiderBar: React.FunctionComponent<Props> = ({ children }) => {
  const { Sider } = Layout;

  return (
    <Sider className="flex-row justify-center hidden lg:block">
      {children}
    </Sider>
  
  )
    <Sider className="flex-row justify-center hidden lg:block">
      {children}
    </Sider>
  )
    <Sider className="flex-row justify-center hidden lg:block">
      {children}
    </Sider>
  );
};

export default SiderBar;
