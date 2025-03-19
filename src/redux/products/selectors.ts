import { RootState } from "../store";

export const selectProducts = (state: RootState) => state.products.products;
export const selectSelectedProduct = (state: RootState) =>
  state.products.selectedItem;
export const selectProductsLoading = (state: RootState) =>
  state.products.isLoading;
export const selectProductsError = (state: RootState) => state.products.error;
