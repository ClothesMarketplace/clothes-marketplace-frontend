import { Outlet } from "react-router-dom";
import Header from "../components/commonComponents/Header/Header";
import Footer from "../components/commonComponents/Footer/Footer";

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
