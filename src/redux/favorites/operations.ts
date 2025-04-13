import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchFavorites = createAsyncThunk<string[]>(
  "favorites/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        "favorites"
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);

export const toggleFavorite = createAsyncThunk<string[], string>(
  "favorites/toggle",
  async (productId, thunkAPI) => {
    try {
      const { data } = await axios.patch(`favorites/${productId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
