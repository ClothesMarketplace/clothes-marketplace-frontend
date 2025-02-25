import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LoginUser, User } from "./types";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials: User, thunkAPI) => {
    try {
      const res = await axios.post("users/signup", credentials);
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

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials: LoginUser, thunkAPI) => {
    try {
      const res = await axios.post("users/login", credentials);
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

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("users/logout");
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

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state: RootState = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("users/current");
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
