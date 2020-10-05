import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const Hello = () => {
  const { signOut } = useAuth();
  return (
    <div>
      <p>Hello</p>
      <NavLink to="/world">World</NavLink>
      <button onClick={signOut}>sign out</button>
    </div>
  );
};

export default memo(Hello);
