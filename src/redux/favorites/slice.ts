import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoritesState } from "./types";
import { fetchFavorites, toggleFavorite } from "./operations";

const initialState: FavoritesState = {
  items: [],
  isLoading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchFavorites.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.isLoading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(
        toggleFavorite.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.items = action.payload;
        }
      );
  },
});

export const favoritesReducer = favoritesSlice.reducer;
