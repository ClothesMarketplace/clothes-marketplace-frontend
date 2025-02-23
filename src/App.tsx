import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const SaleAdvertPage = lazy(
  () => import("./pages/SaleAdvertPage/SaleAdvertPage")
);
const Loader = lazy(
  () => import("./components/commonComponents/Loader/Loader")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}></Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/advert" element={<SaleAdvertPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
