import React from "react";
import { Content } from "antd/es/layout/layout";

const Dashboard = () => {
  return (
    <Content
      style={{
        alignItems: "center",
        padding: "0 48px",
        height: "calc(80vh)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      Dashboard
    </Content>
  );
};

export default Dashboard;
