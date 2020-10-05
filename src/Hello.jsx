import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const Hello = () => {
  return (
    <div>
      <p>Hello</p>
      <p>
        Go to{" "}
        <NavLink to="/world">
          <i>/world</i>
        </NavLink>
      </p>
    </div>
  );
};

export default memo(Hello);
