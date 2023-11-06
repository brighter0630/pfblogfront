import { finnhubClient } from '@/libs/finnhub/connect';

export const getTickerList = (searchWord) => {
	return new Promise((resolve, reject) => finnhubClient.symbolSearch(searchWord, (error, data, response) => {
		if(!error) {
			resolve(data);
		}
		reject('Error in Fetching SymbolList');
	}));
}
