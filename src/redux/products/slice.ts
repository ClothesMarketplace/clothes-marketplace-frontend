import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts, fetchProductById } from "./operations";
import { ProductsState, Product, ProductsResponse } from "./types";

const initialState: ProductsState = {
  products: [],
  selectedItem: null,
  isLoading: false,
  error: null,
};

const handlePending = (state: ProductsState) => {
  state.isLoading = true;
};

const handleRejected = (
  state: ProductsState,
  action: PayloadAction<unknown>
) => {
  state.isLoading = false;
  state.error =
    typeof action.payload === "string"
      ? action.payload
      : "Something went wrong";
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, handlePending)
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<ProductsResponse>) => {
          state.isLoading = false;
          state.error = null;
          state.products = action.payload.products;
        }
      )
      .addCase(fetchProducts.rejected, handleRejected)
      .addCase(fetchProductById.pending, handlePending)
      .addCase(
        fetchProductById.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.isLoading = false;
          state.error = null;
          state.selectedItem = action.payload;
        }
      )
      .addCase(fetchProductById.rejected, handleRejected);
  },
});

export const productsReducer = productsSlice.reducer;
