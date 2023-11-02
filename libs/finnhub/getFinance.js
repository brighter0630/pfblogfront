import { finnhubClient } from '@/libs/finnhub/connect';

export const getIS = (ticker) => {
	return new Promise((resolve, reject) => finnhubClient.financials(ticker, 'ic', 'annual', (error, data, res) => {
		if(!error) {
			resolve(data.financials);
		}
		reject('Error in Fetching Financials');	
	}))
}

export const getBS = (ticker) => {
	return new Promise((resolve, reject) => finnhubClient.financials(ticker, 'bs', 'annual', (error, data, res) => {
		if(!error) {
			resolve(data.financials);
		}
		reject('Error in Fetching Financials');	
	}))
}

export const getCS = (ticker) => {
	return new Promise((resolve, reject) => finnhubClient.financials(ticker, 'cf', 'annual', (error, data, res) => {
		if(!error) {
			resolve(data.financials);
		}
		reject('Error in Fetching Financials');	
	}))
}

export const getRatio = (ticker) => {
	return new Promise((resolve, reject) => finnhubClient.companyBasicFinancials(ticker, 'all', (error, data, res) => {
		if(!error) {
			resolve(data.series.annual);
		}
		reject('Error in Fetching Financials');	
	}))
}
