import { finnhubClient } from '@/libs/finnhub/connect';

export const getPressReleasesList = (ticker) => {
	return new Promise((resolve, reject) => finnhubClient.pressReleases(ticker, {}, (error, data, response) => {
		if(!error) {
			resolve(data);
		}
		reject('Error in Fetching PressReleasesList');
	}));
}

export const getStockNewsList = async (ticker, fromDate, toDate) => {
	const res = await fetch(`https://finnhub.io/api/v1/company-news?symbol=${ticker}&from=${fromDate}&to=${toDate}&token=${process.env.STOCK_APIKEY_FINNHUB}`,
		{ method: 'GET' })
	const data = await res.json();

	return data;
	// finnhub 의 문제인지 아래 코드가 작동하지 않음. 따라서 fetch로 직접 받아오기로.
	// 	return new Promise((resolve, reject) => finnhubClient.companyNews(ticker, fromDate, toDate, (error, data, response) => {
	// 		if(!error) {
	// 			resolve(data);
	// 		}
	// 		console.error(error);
	// 		reject('Error in Fetching StockNewsList');
	// 	}));
}

export const getGeneralNewsList = () => {
 return new Promise((resolve, reject) => finnhubClient.marketNews('general', {}, (error, data, response) => {
	 if(!error) {
		 resolve(data);
	 }
	 reject('Error in Fetching General News List');
 }));
}
