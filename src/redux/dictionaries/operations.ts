import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DictionariesState } from "./types";

export const fetchDictionaries = createAsyncThunk<
  Partial<DictionariesState>,
  void,
  { rejectValue: string }
>("dictionaries/fetchAll", async (_, thunkAPI) => {
  try {
    const [
      brands,
      colors,
      productConditions,
      productSizes,
      categories,
      forWhom,
    ] = await Promise.all([
      axios.get("brands"),
      axios.get("colors"),
      axios.get("productConditions"),
      axios.get("productSizes"),
      axios.get("categories"),
      axios.get("forWhom"),
    ]);

    return {
      brands: brands.data,
      colors: colors.data,
      productConditions: productConditions.data,
      productSizes: productSizes.data,
      categories: categories.data,
      forWhom: forWhom.data,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});
