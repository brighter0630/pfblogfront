/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    stockAPIURL_quote: "https://financialmodelingprep.com/api/v3/quote/",
    stockAPIURL_realtime:
      "https://financialmodelingprep.com/api/v3/quote-short/",
    stockAPIKEY: "178b6863866a57f97d923689f1939227",
  },
};

module.exports = nextConfig;
