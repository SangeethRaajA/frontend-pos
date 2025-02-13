import React from "react";
import { Footer } from "antd/es/layout/layout";

const FooterNav = () => {
  return (
    <>
      <Footer style={{ textAlign: "center" }}>
        Retro© {new Date().getFullYear()} v.1.0.2
        {import.meta.env.VITE_APP_VERSION}
      </Footer>
    </>
  );
};

export default FooterNav;
