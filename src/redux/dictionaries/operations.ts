import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../axiosInstance";
import { DictionariesState, DictionaryItem } from "./types";
import localData from "./fallback.json";
import { AppDispatch, RootState } from "../store";
import { Product } from "../products/types";

const endpointsMap = {
  brands: "brands",
  colors: "colors",
  productConditions: "productConditions",
  productSizes: "productSizes",
  categories: "categories",
  forWhom: "forWhom",
} as const;

type DictionaryKey = keyof typeof endpointsMap;

export const dictionaryAutoLoader =
  (product: any) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    const dictionaryKeys = {
      brands: "brandId",
      colors: "colorId",
      productSizes: "productSizeId",
      productConditions: "productConditionId",
      categories: "categoryId",
      forWhom: "forWhomId",
    } as const;

    const state = getState();

    for (const [dictKey, idField] of Object.entries(dictionaryKeys)) {
      const id = product[idField as keyof Product] as string | undefined;


      if (!id) continue;

      const dictArray = state.dictionaries[
        dictKey as keyof typeof state.dictionaries
      ] as {
        id: string;
      }[];

      const exists = dictArray.some((entry) => entry.id === id);

      if (!exists) {
        await dispatch(fetchDictionaryItemById({ key: dictKey, id }));
      }
    }
  };

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
            console.log(response.data);
          } catch (err) {
            result[key] = [];
          }
        }
      })
    );

    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});


export const fetchDictionaryItemById = createAsyncThunk<
  { key: string; item: DictionaryItem },
  { key: string; id: string },
  { rejectValue: string }
>("dictionaries/fetchItemById", async ({ key, id }, thunkAPI) => {
  try {
    const response = await instance.get(`${key}/${id}`);
    return { key, item: response.data };
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});
