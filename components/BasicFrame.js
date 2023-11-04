import React from "react";

function BasicFrame({ children }) {
  return (
		<div className="mx-auto my-auto p-1 md:p-2 md:p-3 border-2 md:border-4 w-11/12 overflow-y-hidden">
      {children}
    </div>
  );
}

export default BasicFrame;
