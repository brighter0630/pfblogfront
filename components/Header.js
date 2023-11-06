"use client";

import React, { useEffect, useState } from "react";
import UserGreeting from "./UserGreeting";
import ModalBackground from '@/components/ModalBackground';
import AutoCompleteLayout from '@/components/search/AutoCompleteLayout';
import MenuButton from '@/components/MenuButton';
import TickerSearchBox from '@/components/TickerSearchBox';

function Header() {
	const [showSearchAutoComplete, setShowSearchAutoComplete] = useState(false);

	return (
		<div className="px-2 md:px-4 md:px-4  mb-1 md:mb-3 flex bg-[#F5F5F5] fixed top-0 mt-0 pt-0 mx-auto z-30 w-screen items-center justify-center"> 
			<MenuButton />
			<TickerSearchBox />
			<div className="flex-row flex my-2 md:my-4">
				<div className={`${showSearchAutoComplete === false && 'hidden'} z-30 fixed top-10 md:top-16 mx-auto`}>
					<AutoCompleteLayout />
				</div>
				<div className={`absolute top-0 left-0 z-10 ${showSearchAutoComplete === false && 'hidden'}`} onClick={() => setShowSearchAutoComplete(false)} >
					<ModalBackground color={false} />
				</div>
			</div>
			<UserGreeting />
		</div>
	);
}

export default Header;
