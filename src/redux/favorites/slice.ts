import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoritesState } from "./types";
import { fetchFavorites, addFavorite, removeFavorite } from "./operations";

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
        addFavorite.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.items = action.payload;
        }
      )
      .addCase(
        removeFavorite.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.items = action.payload;
        }
      );
  },
});

export const favoritesReducer = favoritesSlice.reducer;
