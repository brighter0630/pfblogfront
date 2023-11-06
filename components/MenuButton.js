"use client";

import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import { BiMenu } from 'react-icons/bi';
import ModalBackground from '@/components/ModalBackground';

export default function MenuButton() {
	const [showMenu, setShowMenu] = useState(false);

	return (
	<div>
		<div onClick={() => setShowMenu(!showMenu)} className={`my-auto cursor-pointer flex float-left px-0 md:px-1`} >
			<span className="collapse md:visible md:min-w-[50px]">메뉴</span>
			<BiMenu className="text-2xl my-auto" />
		</div>
		<aside className={`${showMenu ? 'absolute left-0 top-0 z-10' : 'hidden'}`} onClick={() => setShowMenu(false)} >
			<ModalBackground color={true} />
		</aside>
		<aside className={`h-screen ${showMenu ? 'absolute left-0 top-0 z-20': 'hidden'}`} onClick={() => setTimeout(() => setShowMenu(false), 500)} >
			<Sidebar />
		</aside>
	</div>
	)
}
