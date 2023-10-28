import React from "react";
import TagList from "./TagList";

function Footer({ list }) {
  return (
    <div className="grid grid-flow-col">
      <TagList list={list} />
    </div>
  );
}

export default Footer;
