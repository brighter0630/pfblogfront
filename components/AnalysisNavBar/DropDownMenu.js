"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function DropDownMenu({ show, menu }) {
	const pathName = usePathname();

	if(!menu) <></>

	return (
		<ul>
			<div className={`${show ? "flex flex-col" : "hidden"} absolute top-14 md:top-12 z-10 pr-2 text-center w-full gap-0`}>
				{menu.map((el, index) => (
					<Link href={el.path} prefetch={false} replace={false} key={index}>
						<li key={index} className={`border-0 text-xs md:text-sm px-1 py-3 text-center transition ease-in-out delay-150 bg-gray-300 hover:bg-indigo-200 duration-500 hover:border-0
							${
								el.path.split("/")[3] === pathName.split("/")[3]
									? "bg-indigo-300 text-white"
									: ""
							}`}>{el.title}
						</li>
					</Link>
				))}
			</div>
		</ul>
	)
}
