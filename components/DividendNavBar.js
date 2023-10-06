"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function DividendNavBar({ ticker }) {
  const navLinks = [
    { title: "1년", path: `/analysis/${ticker}/dv/year` },
    { title: "5년", path: `/analysis/${ticker}/dv/5years` },
    { title: "10년", path: `/analysis/${ticker}/dv/10years` },
    { title: "20년", path: `/analysis/${ticker}/dv/20years` },
    { title: "최대", path: `/analysis/${ticker}/dv/max` },
  ];
  const pathName = usePathname();

  return (
    <div>
      <ul className="grid grid-flow-col w-5/12 justify-end gap-5 mx-auto">
        {navLinks.map((navLink, i) => (
          <Link
            href={navLink.path}
            key={i}
            replace={true}
            className={`min-w-[50px] text-center rounded-md p-1 ${
              pathName.split("/")[4] === navLink.path.split("/")[4]
                ? "bg-slate-400 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                : ""
            }`}
          >
            <li>{navLink.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default DividendNavBar;