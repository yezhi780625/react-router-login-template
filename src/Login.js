import React, { memo } from "react";
import { Redirect } from "react-router";
import { useAuth } from "./AuthProvider";

const Login = (props) => {
  const { isLogin, signIn } = useAuth("auth");
  console.log(props);
  return Boolean(isLogin) ? (
    <Redirect to={props.location.from} />
  ) : (
    <button onClick={signIn}>sign in</button>
  );
};

export default memo(Login);
