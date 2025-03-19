import { PersistPartial } from "redux-persist/es/persistReducer";

export interface User {
  name: string;
  email: string;
}
export interface LoginUser {
  email: string;
  password: string;
}

export interface AuthState {
  user: User;
  token: string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: unknown;
}

export type PersistedAuthState = AuthState & PersistPartial;
