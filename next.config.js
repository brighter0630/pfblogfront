/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  env: {
    stockAPIURL_profile: "https://financialmodelingprep.com/api/v3/profile",
    stockAPIAfterMarket:
      "https://financialmodelingprep.com/api/v4/pre-post-market-trade",
    stockPHURL:
      "https://financialmodelingprep.com/api/v3/historical-price-full",
    stockAPIURL_quote: "https://financialmodelingprep.com/api/v3/quote",
    stockAPIURL_realtime:
      "https://financialmodelingprep.com/api/v3/quote-short",
    stockMinPriceURL:
      "https://financialmodelingprep.com/api/v3/historical-chart/1min",
    stockISURL: "https://financialmodelingprep.com/api/v3/income-statement",
    stockBSURL:
      "https://financialmodelingprep.com/api/v3/balance-sheet-statement",
    stockCSURL: "https://financialmodelingprep.com/api/v3/cash-flow-statement",
    stockDVURL:
      "https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend",
    stockRatioURL: "https://financialmodelingprep.com/api/v3/ratios",
    LOCALHOSTBACK: "http://127.0.0.1:5000",
    POSTSPERPAGE: "5",
    stockAPIKEY: process.env.stockAPIKEY,
    GoogleClientID: process.env.GoogleClientID,
    GoogleClientSecret: process.env.GoogleClientSecret,
    NaverClientID: process.env.NaverClientID,
    NaverClientSecret: process.env.NaverClientSecret,
    KakaoClientID: process.env.KakaoClientID,
    KakaoClientSecret: process.env.KakaoClientSecret,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: "brighter87",
    MARIADBID: process.env.MARIADBID,
    MARIADBPASSWD: process.env.MARIADBPASSWD,
    BASE_URL: process.env.BASE_URL,
    SOCKETIOHOST: process.env.SOCKETIOHOST,
  },
  images: {
    domains: [
      "financialmodelingprep.com",
      "https://financialmodelingprep.com",
      "lh3.googleusercontent.com",
      "*",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
