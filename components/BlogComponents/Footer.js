import React from "react";
import TagList from "./TagList";
import ToTheTopButton from "@/components/ToTheTopButton";

function Footer({ list }) {
  return (
    <div className="grid grid-flow-col">
      <TagList list={list} />
      <ToTheTopButton />
    </div>
  );
}

export default Footer;
