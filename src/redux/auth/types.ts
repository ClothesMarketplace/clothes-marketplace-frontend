import { PersistPartial } from "redux-persist/es/persistReducer";

export interface User {
  id: string;
  userName: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}
export interface LoginUser {
  email: string;
  password: string;
}

export interface RegisterUser {
  name: string;
  email: string;
  password: string;
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
  token: string;
  user: {
    id: string;
    userName: string;
    email: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  };
}

export type PersistedAuthState = AuthState & PersistPartial;
