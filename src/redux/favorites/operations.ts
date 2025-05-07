import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const fetchFavorites = createAsyncThunk<string[]>(
  "favorites/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("favorite-products");
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
      const { data } = await axios.post("favorite-products", {
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
      const { data } = await axios.delete("favorite-products", {
        data: { productId, userId },
      });
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
