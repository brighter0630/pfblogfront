import AutoComplete from '@/components/search/AutoComplete';
import { getTickerList } from '@/libs/finnhub/getTickerList';

export default function AutoCompleteLayout({ show, searchWord }) {
	// const data = await getTickerList(searchWord); 
	return (
		<div className={`${show === false && "flex"} bg-white h-32 md:h-64 w-48 md:w-96 shadow-md`}>
			<AutoComplete />
		</div>
	)
}

