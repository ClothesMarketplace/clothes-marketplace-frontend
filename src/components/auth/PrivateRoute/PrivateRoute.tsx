import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../../redux/auth/selectors";

interface PrivateRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  redirectTo = "/",
}: PrivateRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);

  return !isLoggedIn && !isRefreshing ? (
    <Navigate to={redirectTo} replace />
  ) : (
    children
  );
};

export default PrivateRoute;
