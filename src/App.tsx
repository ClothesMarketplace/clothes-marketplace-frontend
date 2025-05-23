import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import PrivateRoute from "./components/auth/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/auth/RestrictedRoute/RestrictedRoute";
import Loader from "./components/commonComponents/Loader/Loader";
import { useAppDispatch } from "./redux/store";
import { refreshUser } from "./redux/auth/operations";
import { fetchDictionaries } from "./redux/dictionaries/operations";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage/ProductsPage"));
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(
  () => import("./pages/RegistrationPage/RegistrationPage")
);
const SaleAdvertPage = lazy(
  () => import("./pages/SaleAdvertPage/SaleAdvertPage")
);
const CabinetPage = lazy(() => import("./pages/CabinetPage/CabinetPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchDictionaries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cabinet" element={<CabinetPage />} />
          <Route
            path="/favorites"
            element={
              <PrivateRoute redirectTo="/registration">
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route
            path="/advert"
            element={
              <PrivateRoute redirectTo="/registration">
                <SaleAdvertPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/registration"
          element={
            <RestrictedRoute>
              <RegistrationPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
