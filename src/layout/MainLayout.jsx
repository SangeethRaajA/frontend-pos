import { Layout } from "antd";
import FooterNav from "../components/FooterNav/FooterNav";
import HeaderNav from "../components/HeaderNav/HeaderNav";

const MainLayout = ({children}) => {
  return (
    <>
      <Layout>
        <HeaderNav />
        {children}
        <FooterNav />
      </Layout>
    </>
  );
};

export default MainLayout;
