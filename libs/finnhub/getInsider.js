export const getInsiderTransactions = async (ticker, page) => {
	// const res = await fetch(`https://financialmodelingprep.com/api/v4/insider-trading?symbol=${ticker}&page=${page}&apikey=${process.env.stockAPIKEY}`, { method: 'GET' });
	const res = await fetch(`https://finnhub.io/api/v1/stock/insider-transactions?symbol=${ticker}&token=${process.env.STOCK_APIKEY_FINNHUB}`, { method: 'GET' });
	const { data } = await res.json();

	return data;
}

