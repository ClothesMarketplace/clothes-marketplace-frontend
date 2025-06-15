import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import instance from "../axiosInstance";


export const fetchFavorites = createAsyncThunk<string[]>(
  "favorites/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("favorite-products");
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);


export const addFavorite = createAsyncThunk<string[], string>(
  "favorites/add",
  async (productId, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const userId = state.auth.user?.id; 
      const { data } = await instance.post("favorite-products", {
        productId,
        userId,
      });
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);


export const removeFavorite = createAsyncThunk<string[], string>(
  "favorites/remove",
  async (productId, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const userId = state.auth.user?.id;
      const { data } = await instance.delete("favorite-products", {
        data: { productId, userId },
      });
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
