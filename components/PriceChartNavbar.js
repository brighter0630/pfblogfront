"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function getUrlPath(pathname, lastComponent) {
	if(pathname !== undefined && lastComponent !== undefined) {
		const pathArray = pathname.split('/');
		const baseUrl = [...pathArray.slice(0, pathArray.length - 1), lastComponent].join('/');
		return baseUrl;
	}
}

function PriceChartNavbar({ ticker }) {
	const pathName = usePathname();
	const navLinks = [
		{
			title: "1W",
			path: getUrlPath(pathName, 'week'),
		},
		{
			title: "3M",
			path: getUrlPath(pathName, '3months'),
		},
		{
			title: "1Y",
			path: getUrlPath(pathName, 'year'),
		},
		{
			title: "3Y",
			path: getUrlPath(pathName, '3years'),
		},
		{
			title: "10Y",
			path: getUrlPath(pathName, '10years'),
		},
		{
			title: "MAX",
			path: getUrlPath(pathName, 'max'),
		},
	];

	return (
		<ul className="grid grid-flow-col gap-5 mx-auto w-11/12">
			{navLinks.map((navLink, i) => (
				<Link
				key={i}
				scroll={false}
				href={{ pathname: navLink.path }}
				prefetch={false}
			>
					<li
					className={`min-w-[30px] md:min-w-[100px] text-xs md:text-base text-center rounded-md p-1 ${
						pathName === navLink.path
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

export default PriceChartNavbar;
