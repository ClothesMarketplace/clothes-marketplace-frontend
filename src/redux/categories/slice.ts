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
          console.log("action.payload", action.payload);

          state.categories = action.payload;
        }
      );
  },
});

export const categoriesReducer = categoriesSlice.reducer;
