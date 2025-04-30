import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";
import { AuthResponse, AuthState } from "./types";

const initialState: AuthState = {
  user: {
    id: "",
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
  },
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.isLoading = false;
          state.error = null;
          // state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addCase(
        logIn.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.isLoading = false;
          state.error = null;
          // state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })

      // refreshing user ---------------------------

      .addCase(refreshUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.isRefreshing = false;
        // state.user = action.payload;
        state.token ? (state.isLoggedIn = true) : (state.isLoggedIn = false);
      })
      .addCase(
        refreshUser.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.isRefreshing = false;
          state.isLoading = false;
          state.error = action.payload;
        }
      )

      // Matchers -------------------------------

      .addMatcher(
        isAnyOf(register.pending, logIn.pending, logOut.pending),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(register.rejected, logIn.rejected, logOut.rejected),
        (state, action: PayloadAction<unknown>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});
export const { resetError } = authSlice.actions;
export const authReducer = authSlice.reducer;
