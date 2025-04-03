import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GetCategoriesResponse } from "./types";

export const getCategories = createAsyncThunk<GetCategoriesResponse, void>(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get<GetCategoriesResponse>("categories");
      return data.toSorted((a, b) => a.name.localeCompare(b.name));
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message);
    }
  }
);
