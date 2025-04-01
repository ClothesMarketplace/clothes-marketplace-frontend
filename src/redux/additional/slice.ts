import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AdditionalStates {
  isMenuOpen: boolean;
}

const initialState: AdditionalStates = {
  isMenuOpen: false,
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
  },
});
export const { openMenu, closeMenu } = aditionalStatesSlice.actions;
export const aditionalStatesReducer = aditionalStatesSlice.reducer;

export const selectIsMenuOpen = (state: RootState) =>
  state.aditionalStates.isMenuOpen;
