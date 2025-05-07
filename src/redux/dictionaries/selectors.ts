import { RootState } from "../store";

export const selectBrands = (state: RootState) => state.dictionaries.brands;
export const selectColors = (state: RootState) => state.dictionaries.colors;
export const selectProductConditions = (state: RootState) =>
  state.dictionaries.productConditions;
export const selectProductSizes = (state: RootState) =>
  state.dictionaries.productSizes;
export const selectCategories = (state: RootState) =>
  state.dictionaries.categories;
export const selectForWhom = (state: RootState) => state.dictionaries.forWhom;
