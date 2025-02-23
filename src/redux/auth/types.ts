export interface User {
  name: string;
  email: string;
}

export interface AuthState {
  user: User;
  token: string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}
