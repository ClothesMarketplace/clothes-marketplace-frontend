import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AuthResponse, LoginUser, RegisterUser } from "./types";

axios.defaults.baseURL = "https://clothes-marketplace.runasp.net";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk<AuthResponse, RegisterUser>(
  "auth/register",
  async (credentials: RegisterUser, thunkAPI) => {
    try {
      const res = await axios.post<AuthResponse>("auth/register", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "Registration failed";
        return thunkAPI.rejectWithValue(errorMessage);
      } else {
        return thunkAPI.rejectWithValue(
          error.message || "An unexpected error occurred"
        );
      }
    }
  }
);

export const logIn = createAsyncThunk<AuthResponse, LoginUser>(
  "auth/login",
  async (credentials: LoginUser, thunkAPI) => {
    try {
      const res = await axios.post<AuthResponse>("auth/login", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.error || "Authorization failed";
        return thunkAPI.rejectWithValue(errorMessage);
      } else {
        return thunkAPI.rejectWithValue(
          error.message || "An unexpected error occurred"
        );
      }
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("auth/logout");
    clearAuthHeader();
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || error.message || "Registration failed";
      return thunkAPI.rejectWithValue(errorMessage);
    } else {
      return thunkAPI.rejectWithValue(
        error.message || "An unexpected error occurred"
      );
    }
  }
});

//TODO: Implement the refreshUser operation
export const refreshUser = createAsyncThunk<
  any,
  void,
  { state: RootState; rejectValue: string }
>("auth/refresh", async (_, thunkAPI) => {
  const state: RootState = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("Unable to fetch user");
  }

  try {
    setAuthHeader(persistedToken);
    // const res = await axios.get("users/current");
    // return res.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || error.message || "Registration failed";
      return thunkAPI.rejectWithValue(errorMessage);
    } else {
      return thunkAPI.rejectWithValue(
        error.message || "An unexpected error occurred"
      );
    }
  }
});
