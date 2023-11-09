"use client"

import { BsSearch } from "react-icons/bs";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from 'react';
import { getTickerListAPI } from '@/libs/finnhub/getTickerList';
// import { debounce } from '@/libs/debounce';
import { debounce } from 'lodash';
import AutoCompleteLayout from '@/components/search/AutoCompleteLayout';

export function cursorToSearchBox(e) {
	if (e.key !== "Escape") {
		document.getElementById("searchTicker").focus();
	} else if (e.key === "Escape") {
		document.getElementById("searchTicker").blur();
	}
}

export function searchPathFinder(ticker, pathName) {
	if (pathName.includes("analysis")) {
		const urlParticles = pathName.split("/");
		urlParticles[2] = ticker;
		return `${urlParticles.join("/")}`;
	} else {
		return `/analysis/${ticker}/pc/3months`;
	}
}

export default function TickerSearchBox() {
	const [ticker, setTicker] = useState("");
	const [tickerList, setTickerList] = useState([]);
	const [showAutoComplete, setShowAutoComplete] = useState(false);
	const router = useRouter();
	const searchHandler = (e) => {
		if (e.key === "Enter") {
			document.getElementById("searchTicker").blur();
			setShowAutoComplete(false);
			router.push(searchPathFinder(ticker, pathName));
			e.target.value = "";
		}
	};
	const searchClicked = () => {
		if (ticker) {
			setShowAutoComplete(false);
			router.push(searchPathFinder(ticker, pathName));
			setTicker("");
		}
	};
	const inputHandler = (e) => {
		setTicker(e.target.value);
	}
	const pathName = usePathname();

	useEffect(() => {
		if (window !== undefined) {
			if(pathName.includes('analysis') || pathName.includes('transactionHistory') || pathName === '/') {
				window.addEventListener("keydown", cursorToSearchBox);
			} else {
				window.removeEventListener('keydown', cursorToSearchBox);
			}
		}
	}, [pathName]);

	useEffect(() => {
		async function getTickerList(ticker) {
			const res = await getTickerListAPI(ticker);
			setTickerList(res);
			setShowAutoComplete(true);
		}
		if(ticker.length > 0) {
			debounce(() => getTickerList(ticker), 500)();
		} else {
			setShowAutoComplete(false);
		}
	}, [ticker]);

	return (
		<div className="flex flex-row py-1 my-1 relative">
			<label htmlFor="searchTicker"> 
				<input
				type="search"
				onChange={(e) => setTicker(e.target.value)}
				onClick={(e) => (e.target.value = "")}
				onKeyDown={searchHandler}
				placeholder="티커를 입력하세요. (ex: AAPL)"
				autoComplete="off"
				id="searchTicker"
				className="outline-0 rounded-md ml-2 md:ml-5 text-xs md:text-base opacity-90 p-2 md:p-4 w-30 lg:w-60"
			/>
				</label>
				<BsSearch
				className="cursor-pointer mx-3 my-auto"
				onClick={() => searchClicked()}
			/>
			<div className={`${showAutoComplete ? "flex" : "hidden"} z-30 absolute my-7 md:my-12`}>
				<AutoCompleteLayout show={showAutoComplete} tickerList={tickerList} ticker={ticker} setShowAutoComplete={setShowAutoComplete} />
			</div>
		</div>
	)
}
