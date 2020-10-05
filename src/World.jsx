import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const World = () => {
  return (
    <div>
      <p>World</p>
      <p>
        Go to{" "}
        <NavLink to="/">
          <i>/</i>
        </NavLink>
      </p>
    </div>
  );
};

export default memo(World);
