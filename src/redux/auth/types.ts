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
}
