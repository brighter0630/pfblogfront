import React from "react";
import TagList from "./TagList";
import ToTheTop from "./ToTheTop";

function Footer({ list }) {
  return (
    <div className="grid grid-flow-col">
      <TagList list={list} />
      <ToTheTop />
    </div>
  );
}

export default Footer;
