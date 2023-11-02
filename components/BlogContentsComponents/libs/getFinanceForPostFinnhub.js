import { finnhubClient } from '@/libs/finnhub/connect';

export async function getISForPost(ticker, lastYear, howmany) {
	const res = await fetch(`${process.env.stockISURL}/${ticker}?period=annual&apikey=${process.env.stockAPIKEY}`);
	const data = await res.json();
	return data.filter(el => new Date(el.date) <= new Date(`${lastYear}-12-31`)).slice(0, howmany);
}
export async function getBSForPost(ticker, lastYear, howmany) {
	const res = await fetch(`${process.env.stockBSURL}/${ticker}?period=annual&apikey=${process.env.stockAPIKEY}`);
	const data = await res.json();
	return data.filter(el => new Date(el.date) <= new Date(`${lastYear}-12-31`)).slice(0, howmany);
}
export async function getCSForPost(ticker, lastYear, howmany) {
	const res = await fetch(`${process.env.stockCSURL}/${ticker}?period=annual&apikey=${process.env.stockAPIKEY}`);
	const data = await res.json();
	return data.filter(el => new Date(el.date) <= new Date(`${lastYear}-12-31`)).slice(0, howmany);
}
export async function getRatioForPost(ticker, lastYear, howmany) {
	const res = await fetch(`${process.env.stockRatioURL}/${ticker}?period=annual&apikey=${process.env.stockAPIKEY}`);
	const data = await res.json();
	return data.filter(el => new Date(el.date) <= new Date(`${lastYear}-12-31`)).slice(0, howmany);
}

export async function getDVForPost(ticker, lastYear, howmany) {
	const res = await fetch(`${process.env.stockDVURL}/${ticker}?period=annual&apikey=${process.env.stockAPIKEY}`);
	const data = await res.json();
	return data.filter(el => new Date(el.date) <= new Date(`${lastYear}-12-31`)).slice(0, howmany);
}

export async function getOutlookForPost(ticker, type, lastYear, howmany) {
	const res = await fetch(`${process.env.stockAPIURL_outlook}${ticker}&apikey=${process.env.stockAPIKEY}`);
	const data = await res.json();
	const financialData = data['financialsAnnual'];
	switch (type) {
		case 'IS':
			return financialData['income'].filter(el => new Date(el.date) <= new Date(`${lastYear}-12-31`)).slice(0, howmany);
		case 'BS':
			return financialData['balance'].filter(el => new Date(el.date) <= new Date(`${lastYear}-12-31`)).slice(0, howmany);
		case 'CS':
			return financialData['cash'].filter(el => new Date(el.date) <= new Date(`${lastYear}-12-31`)).slice(0, howmany);
		case 'Ratio':
			return financialData['ratios'].filter(el => new Date(el.date) <= new Date(`${lastYear}-12-31`)).slice(0, howmany);
		}

	return false;
}
