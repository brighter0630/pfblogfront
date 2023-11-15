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
}

export const getGeneralNewsList = () => {
 return new Promise((resolve, reject) => finnhubClient.marketNews('general', {}, (error, data, response) => {
	 if(!error) {
		 resolve(data);
	 }
	 reject('Error in Fetching General News List');
 }));
}
