import { configureStore, Reducer } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";
import { useDispatch, useSelector } from "react-redux";
import { categoriesReducer } from "./categories/slice";
import { productsReducer } from "./products/slice";

import { PersistedAuthState } from "./auth/types";
import {
  aditionalStatesReducer,
  PersistedAditionalState,
} from "./additional/slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const lastSearchRequestConfig = {
  key: "additionalStates",
  storage,
  whitelist: ["lastSearchRequests"],
};

const persistedAuthReducer: Reducer<PersistedAuthState> = persistReducer(
  authPersistConfig,
  authReducer
);
const persistedLastSearchRequestReducer: Reducer<PersistedAditionalState> =
  persistReducer(lastSearchRequestConfig, aditionalStatesReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    categories: categoriesReducer,
    products: productsReducer,
    aditionalStates: persistedLastSearchRequestReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

// example
// const dispatch = useAppDispatch();
// dispatch(register(user));
