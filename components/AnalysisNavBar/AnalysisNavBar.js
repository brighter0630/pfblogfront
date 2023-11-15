"use client";

import Link from "next/link";
import DropDownMenu from '@/components/AnalysisNavBar/DropDownMenu';
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiArrowDropDownLine } from 'react-icons/ri';

function AnalysisNavBar({ ticker }) {
	const [navLinks, setNavLinks] = useState([
		{
			title: "주가 차트",
			type: 'link',
			path: `/analysis/${ticker}/pc/3months`,
		},
		{
			title: '재무 정보',
			type: 'title',
			path: '',
			content: [{
				title: "손익계산서",
				type: 'link',
				path: `/analysis/${ticker}/is`,
			},
				{
					title: "대차대조표",
					type: 'link',
					path: `/analysis/${ticker}/bs`,
				},
				{
					title: "현금흐름표",
					type: 'link',
					path: `/analysis/${ticker}/cs`,
				},
				{
					title: "재무비율 및 배당",
					type: 'link',
					path: `/analysis/${ticker}/dv/10years`,
				},
			]
		},
		{
			title: '내부자 거래',
			type: 'link',
			path: `/analysis/${ticker}/insider/transactions/1`,
		},
		{
			title: '애널리스트',
			type: 'title',
			path: '',
			content: [
				{
					title: '의견',
					type: 'link',
					path: `/analysis/${ticker}/analyst/ratings/byticker/1`,
				}
			]
		}
	]);
	const pathName = usePathname();
	let baseArray = (new Array(navLinks.length)).fill(false);
	const [showFinancialMenu, setShowFinancialMenu] = useState((new Array(navLinks.length)).fill(false));
	const handleHover = (i) => {
		baseArray[i] = true;
		setShowFinancialMenu(baseArray);
	}
	const handleMouseLeave = (i) => {
		setShowFinancialMenu((new Array(navLinks.length)).fill(false));
	}

	return (
		<ul className="w-11/12 mx-auto flex flex-row">
			{navLinks.map((navLink, i) => (
				<div key={i} className="w-1/5 lg:w-1/5 relative">
					{navLink.type === 'link' ? ( 
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
					) : ( <li onMouseEnter={() => handleHover(i)} onClick={() => handleHover(i)} onMouseLeave={() => handleMouseLeave(i)} className={`border-0 m-1 text-xs md:text-sm py-3 text-center bg-gray-300`}
				>
						<div className="flex flex-row items-center justify-center relative">
							<span>{navLink.title}</span>
							<RiArrowDropDownLine className={`text-base md:text-xl absolute hidden md:flex md:right-2 ${showFinancialMenu && "rotate-180"}`} />
						</div>
					<DropDownMenu show={showFinancialMenu[i]} menu={navLink.content} />	
					</li> )}
				</div>
			))}
			</ul>
	);
}

export default AnalysisNavBar;
