import { createSlice } from "@reduxjs/toolkit";
import { CategoryState } from "./types";

const initialState: CategoryState = {
  categories: ["Одяг", "Взуття", "Електроніка", "Аксесуари"],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //     builder.addCase()
  // }
});

export const categoriesReducer = categoriesSlice.reducer;
