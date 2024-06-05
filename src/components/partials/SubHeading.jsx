import React from "react";

const SubHeading = ({ children, className }) => {
  return <div className={`font-semibold  ${className}`}>{children}</div>;
};

export default SubHeading;
