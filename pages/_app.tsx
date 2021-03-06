import React from "react";
import type { AppProps } from "next/app";
import "../assets/styles/tailwind.css";
import "../assets/styles/antd.css";

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} className="h-screen" />;
};

export default App;
