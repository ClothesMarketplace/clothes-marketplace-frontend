import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesState, GetCategoriesResponse } from "./types";
import { getCategories } from "./operations";

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state: CategoriesState) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getCategories.fulfilled,
        (
          state: CategoriesState,
          action: PayloadAction<GetCategoriesResponse>
        ) => {
          state.isLoading = false;
          state.error = null;
          state.categories = action.payload;
        }
      )
      .addCase(
        getCategories.rejected,
        (state: CategoriesState, action: PayloadAction<unknown>) => {
          state.isLoading = false;
          state.error =
            typeof action.payload === "string"
              ? action.payload
              : "Something went wrong";
          state.categories = [];
        }
      );
  },
});

export const categoriesReducer = categoriesSlice.reducer;
