import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { PersistPartial } from "redux-persist/es/persistReducer";

interface AdditionalStates {
  isMenuOpen: boolean;
  lastSearchRequests: string[];
}

export type PersistedAditionalState = AdditionalStates & PersistPartial;

const initialState: AdditionalStates = {
  isMenuOpen: false,
  lastSearchRequests: [],
};

const aditionalStatesSlice = createSlice({
  name: "aditionalStates",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    addLastSearchRequest: (state, action) => {
      state.lastSearchRequests.unshift(action.payload);
    },
    removeLastSearchRequest: (state, action) => {
      state.lastSearchRequests = state.lastSearchRequests.filter(
        (request) => request !== action.payload
      );
    },
    clearLastSearchRequests: (state) => {
      state.lastSearchRequests = [];
    },
  },
});
export const {
  openMenu,
  closeMenu,
  addLastSearchRequest,
  removeLastSearchRequest,
  clearLastSearchRequests,
} = aditionalStatesSlice.actions;
export const aditionalStatesReducer = aditionalStatesSlice.reducer;

export const selectIsMenuOpen = (state: RootState) =>
  state.aditionalStates.isMenuOpen;

export const selectLastSearchRequests = (state: RootState) =>
  state.aditionalStates.lastSearchRequests;
