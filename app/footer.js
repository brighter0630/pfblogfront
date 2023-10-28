import React from "react";

function Footer() {
  return (
    <footer className="text-center font-semibold max-h-52 bg-[--sidebar-color] w-min-screen h-16 overflow-x-hidden">
      <div className="my-auto">
        <p>
          <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> 배당성장투자.
          All rights reserved.
        </p>
        <p>Contact: brighter87@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;
