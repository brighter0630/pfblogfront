"use client";

import Link from "next/link";
import { useState } from "react";

function NavBar({ ticker }) {
  const navLinks = [
    {
      title: "1주일",
      path: `/analysis/${ticker}/pc/week`,
    },
    {
      title: "3개월",
      path: `/analysis/${ticker}/pc/3months`,
    },
    {
      title: "1년",
      path: `/analysis/${ticker}/pc/year`,
    },
    {
      title: "3년",
      path: `/analysis/${ticker}/pc/3years`,
    },
    {
      title: "10년",
      path: `/analysis/${ticker}/pc/10years`,
    },
    {
      title: "MAX",
      path: `/analysis/${ticker}/pc/max`,
    },
  ];
  const [isActive, setIsActive] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const toggleIsActive = (array, i) => {
    array = [false, false, false, false, false, false];
    array[i] = true;
    setIsActive(array);
  };

  return (
    <ul className="grid grid-flow-col w-5/12 justify-end gap-5 mx-auto">
      {navLinks.map((navLink, i) => (
        <Link key={i} href={navLink.path}>
          <li
            onClick={() => toggleIsActive(isActive, i)}
            className={`min-w-[50px] text-center rounded-md p-1 ${
              isActive[i] === true
                ? "bg-slate-400 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                : ""
            }`}
          >
            {navLink.title}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default NavBar;
