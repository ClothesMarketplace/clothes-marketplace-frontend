import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product, ProductsResponse } from "./types";

export const fetchProducts = createAsyncThunk<ProductsResponse, string>(
  "products/fetchAll",
  async (credentials: string, thunkAPI) => {
    try {
      const { data } = await axios.get<ProductsResponse>(credentials);
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
