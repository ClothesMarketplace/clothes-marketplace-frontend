import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product, ProductsResponse } from "./types";

export const fetchProducts = createAsyncThunk<ProductsResponse, void>(
  "products/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get<ProductsResponse>(
        "products?PageNumber=1&PageSize=10&SortBy=Price&SortDirection=Asc"
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const fetchProductById = createAsyncThunk<Product, string>(
  "products/fetchProduct",
  async (productId, thunkAPI) => {
    try {
      const { data } = await axios.get<Product>(`products/${productId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
