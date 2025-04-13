import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/commonComponents/Header/Header";
import Footer from "../components/commonComponents/Footer/Footer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  closeMenu,
  openMenu,
  selectIsMenuOpen,
} from "../redux/additional/slice";

const Layout = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isMenuOpen = useAppSelector(selectIsMenuOpen);

  useEffect(() => {
    if (location.pathname === "/cabinet") dispatch(openMenu());
    if (location.pathname !== "/cabinet" && isMenuOpen) dispatch(closeMenu());
  }, [location]);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      {!isMenuOpen && <Footer />}
    </div>
  );
};

export default Layout;
