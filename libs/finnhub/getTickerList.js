import { finnhubClient } from '@/libs/finnhub/connect';

// export const getTickerList = () => {
// 	return new Promise((resolve, reject) => finnhubClient.stockSymbols('US', (error, data, response) => {
// 		if(!error) {
// 			console.log(data)
// 			// 			const plainArray = res.map((el, index) => {
// 			// 				if(el.type === 'Common Stock') {
// 			// 					return {
// 			// 						description: el.description,
// 			// 						displaySymbol: el.displaySymbol,
// 			// 						symbol: el.symbol,
// 			// 						type: el.type
// 			// 					}
// 			// 				}
// 			// 			})
// 			// resolve(plainArray);
// 			resolve(data);
// 		}
// 		reject('Error in Fetching SymbolList');
// 	}));
// }

export const getTickerListAPI = async (ticker) => {
	// const res = await fetch(`https://finnhub.io/api/v1/stock/symbol?${ticker}exchange=US&token=${process.env.STOCK_APIKEY_FINNHUB}`, { method: 'GET'});
	const res = await fetch(`https://finnhub.io/api/v1/search?q=${ticker}&token=${process.env.STOCK_APIKEY_FINNHUB}`, { method: 'GET' });
	const data = res.json();

	return data;
}
