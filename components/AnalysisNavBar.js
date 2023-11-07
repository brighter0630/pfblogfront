"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function AnalysisNavBar({ ticker }) {
  const [navLinks, setNavLinks] = useState([
    {
      title: "주가 차트",
      path: `/analysis/${ticker}/pc/3months`,
    },
    {
      title: "손익계산서",
      path: `/analysis/${ticker}/is`,
    },
    {
      title: "대차대조표",
      path: `/analysis/${ticker}/bs`,
    },
    {
      title: "현금흐름표",
      path: `/analysis/${ticker}/cs`,
    },
    {
      title: "재무비율 및 배당",
      path: `/analysis/${ticker}/dv/10years`,
    },
  ]);
  const pathName = usePathname();

  return (
		<ul className="w-11/12 mx-auto flex flex-row">
			{navLinks.map((navLink, i) => (
				<div key={i} className="w-1/5 lg:w-1/5">
					<Link href={navLink.path} replace={false} prefetch={false}>
						<li
						className={`border-0 m-1 text-xs md:text-sm px-1 py-3 text-center transition ease-in-out delay-150 bg-gray-300 hover:bg-indigo-200 duration-500 hover:border-0
						${
							navLink.path.split("/")[3] === pathName.split("/")[3]
								? "bg-indigo-300 text-white"
								: ""
						}`}
						>
							{navLink.title}
						</li>
					</Link>
				</div>
			))}
		</ul>
  );
}

export default AnalysisNavBar;
