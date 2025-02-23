import { Outlet } from "react-router-dom";
import Header from "../components/commonComponents/Header/Header";
import Footer from "../components/commonComponents/Footer/Footer";
import { Suspense } from "react";

const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <Footer />
    </div>
  );
};

export default Layout;
