import React from "react";

const MainHeading = ({ children, className }) => {
  return <div className={`font-bold ${className}`}>{children}</div>;
};

export default MainHeading;
