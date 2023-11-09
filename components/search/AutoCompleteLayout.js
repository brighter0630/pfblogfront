import Link from 'next/link';

export default function AutoCompleteLayout({ tickerList, ticker, setShowAutoComplete }) {
	const clickHandler = () => setShowAutoComplete(false);

	if(tickerList.length !== 0) {
		const filtered = tickerList.result.filter(el => el.type === 'Common Stock' && !el.symbol.includes('.')).sort((a, b) => a.displaySymbol.includes(ticker.toUpperCase()) || a.description.toLowerCase().includes(ticker.toLowerCase()));

		if(ticker === '') setShowAutoComplete(false);

		if(filtered.length === 0 && ticker !== '' ) {
			return (			
				<div className={`bg-white min-h-[30px] md:h-fit min-w-[250px] w-10/12 md:w-96 shadow-md`}>
					<li className="p-1 md:p-2 list-none">
						<span className="text-xs md:text-sm">일치하는 기업이 없습니다.</span>
					</li>
				</div>
			)
		}

		return (
			<div className={`bg-white min-h-[30px] md:h-fit min-w-[250px] w-10/12 md:w-96 shadow-md`}>
				{filtered.map((e, index) => (
					<Link key={index} href={`/analysis/${e.displaySymbol}/pc/year`} onClick={clickHandler}>	
						<li className="p-1 md:p-2 list-none transition duration-200 delay-100 hover:bg-gray-300">
							<span className="text-sm">{e.displaySymbol}</span> | <span className="text-xs">{e.description}</span>
						</li>
					</Link>
				))}
					</div> );
	} 
}

