import React from "react";
import { Redirect, Route } from "react-router";
import { useAuth } from "./AuthProvider";

const PrivateRoute = (props) => {
  const { isLogin } = useAuth();
  return Boolean(isLogin) ? (
    <Route {...props} />
  ) : (
    <Redirect to={{ pathname: "/login", from: props.path }} />
  );
};

export default PrivateRoute;
