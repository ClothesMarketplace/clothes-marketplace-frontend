import { createSlice } from "@reduxjs/toolkit";
import { DictionariesState, DictionaryItem } from "./types";
import { fetchDictionaries, fetchDictionaryItemById } from "./operations";

const initialState: DictionariesState = {
  brands: [],
  colors: [],
  productConditions: [],
  productSizes: [],
  categories: [],
  forWhom: [],
  loading: false,
  error: null,
};

const dictionariesSlice = createSlice({
  name: "dictionaries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDictionaries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDictionaries.fulfilled, (state, action) => {
        // Object.assign(state, action.payload);

        console.log("✅ fetchDictionaries payload:", action.payload);

        state.brands = action.payload.brands || [];
        state.colors = action.payload.colors || [];
        state.productConditions = action.payload.productConditions || [];
        state.productSizes = action.payload.productSizes || [];
        state.categories = action.payload.categories || [];
        state.forWhom = action.payload.forWhom || [];

        state.loading = false;
      })
      .addCase(fetchDictionaries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      }).addCase(fetchDictionaryItemById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDictionaryItemById.fulfilled, (state, action) => {
        const { key, item } = action.payload;
        const targetArray = state[
          key as keyof DictionariesState
        ] as DictionaryItem[];

        if (!targetArray.some((i) => i.id === item.id)) {
          targetArray.push(item);
        }
        state.loading = false;
      }).addCase(fetchDictionaryItemById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const dictionariesReducer = dictionariesSlice.reducer;



