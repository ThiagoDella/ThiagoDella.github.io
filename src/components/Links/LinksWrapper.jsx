import React from "react";
import Links from "./index";
function LinksWrapper({ children, ...props }) {
  return (
    <div>
      <div className="links--big-screen">
        <Links />
        {children}
      </div>
      <div className="links--small-screen">
        {children}
        <Links />
      </div>
    </div>
  );
}

export default LinksWrapper;
