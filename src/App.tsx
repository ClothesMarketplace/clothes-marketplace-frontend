import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./Layout/Layout";
import PrivateRoute from "./components/auth/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/auth/RestrictedRoute/RestrictedRoute";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(
  () => import("./pages/RegistrationPage/RegistrationPage")
);
const SaleAdvertPage = lazy(
  () => import("./pages/SaleAdvertPage/SaleAdvertPage")
);
// const Loader = lazy(
//   () => import("./components/commonComponents/Loader/Loader")
// );
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/favorites"
            element={
              <PrivateRoute redirectTo="/registration">
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/advert" element={<SaleAdvertPage />} />
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
