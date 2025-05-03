import { PersistPartial } from "redux-persist/es/persistReducer";

export interface User {
  id: string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
}
export interface LoginUser {
  email: string;
  password: string;
}

export interface RegisterUser {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

export interface AuthState {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: unknown;
}

export interface AuthResponse {
  success: boolean;
  token: string;
  refreshToken: string;
  message: string;
  errors: string[];
}

export type PersistedAuthState = AuthState & PersistPartial;
