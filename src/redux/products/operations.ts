import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product, ProductsResponse } from "./types";

axios.defaults.baseURL = "https://dummyjson.com";

export const fetchProducts = createAsyncThunk<ProductsResponse, void>(
  "products/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get<ProductsResponse>("/products");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const fetchProductById = createAsyncThunk<Product, number>(
  "products/fetchProduct",
  async (productId, thunkAPI) => {
    try {
      const { data } = await axios.get<Product>(`/products/${productId}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

