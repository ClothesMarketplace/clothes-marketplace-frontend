// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { AxiosResponse } from "axios";
// import { DictionariesState } from "./types";
// import instance from "../axiosInstance";

// export const fetchDictionaries = createAsyncThunk<
//   Partial<DictionariesState>,
//   void,
//   { rejectValue: string }
// >("dictionaries/fetchAll", async (_, thunkAPI) => {
//   try {
//     const [
//       brandsRes,
//       colorsRes,
//       productConditionsRes,
//       productSizesRes,
//       categoriesRes,
//       forWhomRes,
//     ] = await Promise.allSettled([
//       instance.get("brands"),
//       instance.get("colors"),
//       instance.get("productConditions"),
//       instance.get("productSizes"),
//       instance.get("categories"),
//       instance.get("forWhom"),
//     ]);

//     const getData = <T>(res: PromiseSettledResult<AxiosResponse<T>>) =>
//       res.status === "fulfilled" ? res.value.data : undefined;

//     return {
//       brands: getData(brandsRes),
//       colors: getData(colorsRes),
//       productConditions: getData(productConditionsRes),
//       productSizes: getData(productSizesRes),
//       categories: getData(categoriesRes),
//       forWhom: getData(forWhomRes),
//     };
    
//   } catch (error) {
//     console.error("❌ fetchDictionaries failed", error);
//     return thunkAPI.rejectWithValue((error as Error).message);
//   }
// });


import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../axiosInstance";
import { DictionariesState } from "./types";
import localData from "./fallback.json";

const endpointsMap = {
  brands: "brands",
  colors: "colors",
  productConditions: "productConditions",
  productSizes: "productSizes",
  categories: "categories",
  forWhom: "forWhom",
} as const;

type DictionaryKey = keyof typeof endpointsMap;

export const fetchDictionaries = createAsyncThunk<
  Partial<DictionariesState>,
  void,
  { rejectValue: string }
>("dictionaries/fetchAll", async (_, thunkAPI) => {
  try {
    const result: Partial<DictionariesState> = {};

    await Promise.allSettled(
      (Object.keys(endpointsMap) as DictionaryKey[]).map(async (key) => {
        const local = localData[key];

        if (local && local.length > 0) {
          result[key] = local;
        } else {
          try {
            const response = await instance.get(endpointsMap[key]);
            result[key] = response.data;
          } catch (err) {
            result[key] = []; // fallback to empty array if fetch fails
          }
        }
      })
    );

    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});