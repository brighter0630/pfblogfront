/** @type {import('next').NextConfig} */
"178b6863866a57f97d923689f1939227"
const APIKEY = process.env.APIKEY

const nextConfig = {
  reactStrictMode: false,
  env: {
    stockAPIURL_profile: "https://financialmodelingprep.com/api/v3/profile",
    stockAPIHISTPRICE:
      "https://financialmodelingprep.com/api/v3/historical-price-full",
    stockAPIURL_quote: "https://financialmodelingprep.com/api/v3/quote",
    stockAPIURL_realtime:
      "https://financialmodelingprep.com/api/v3/quote-short",
    stockAPIKEY: APIKEY,
    LOCALHOSTBACK: "http://127.0.0.1:5000",
  },
  images: {
    domains: ["financialmodelingprep.com"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "financialmodelingprep.com",
    //     port: "",
    //     pathname: "/api/**",
    //   },
    // ],
  },
};

module.exports = nextConfig;

//https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?serietype=line&apikey=178b6863866a57f97d923689f1939227
