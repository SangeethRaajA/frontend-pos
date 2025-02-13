import { Link } from "react-router-dom";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

const NotFound = () => {
  return (
    <Layout>
      <Content
        style={{
          alignItems: "center",
          padding: "0 48px",
          height: "calc(100vh - 64px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>404 Not Found</h1>
        <Link to={"/"}>Go back to Dashboard</Link>
      </Content>
    </Layout>
  );
};

export default NotFound;
