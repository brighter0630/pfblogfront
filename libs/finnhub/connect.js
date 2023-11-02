const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.STOCK_APIKEY_FINNHUB;

const finnhubClient = new finnhub.DefaultApi();

export { finnhubClient };
