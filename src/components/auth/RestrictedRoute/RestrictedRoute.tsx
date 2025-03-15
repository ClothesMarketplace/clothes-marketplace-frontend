import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import { useAppSelector } from "../../../redux/store";
import React from "react";

interface PrivateRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

const RestrictedRoute: React.FC<PrivateRouteProps> = ({
  children,
  redirectTo = "/",
}: PrivateRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : children;
};

export default RestrictedRoute;
