import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const World = () => {
  const { signOut } = useAuth();
  return (
    <div>
      <p>World</p>
      <NavLink to="/">Hello</NavLink>
      <button onClick={signOut}>sign out</button>
    </div>
  );
};

export default memo(World);
