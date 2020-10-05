import React, { memo } from "react";
import { useAuth } from "./AuthProvider";

const LogOut = () => {
  const { isLogin, signOut } = useAuth();
  return isLogin ? <button onClick={signOut}>sign out</button> : null;
};

export default memo(LogOut);
