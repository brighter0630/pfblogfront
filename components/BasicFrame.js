import React from "react";

function BasicFrame({ children }) {
  return (
    <div className="mx-auto my-auto p-4 border-4 w-full min-w-0">
      {children}
    </div>
  );
}

export default BasicFrame;
