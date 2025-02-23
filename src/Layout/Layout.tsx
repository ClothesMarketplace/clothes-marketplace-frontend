import { Outlet } from "react-router-dom";
import Header from "../components/commonComponents/Header/Header";
import Footer from "../components/commonComponents/Footer/Footer";


const Layout = () => {
  return <div>
    <Header />
    <Outlet />
    <Footer/>
  </div>;
};

export default Layout;
