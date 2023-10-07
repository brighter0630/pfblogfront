/** @type {import('next').NextConfig} */

const APIKEY = process.env.APIKEY;
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Configure `pageExtensions`` to include MDX files
  reactStrictMode: false,
  env: {
    stockAPIURL_profile: "https://financialmodelingprep.com/api/v3/profile",
    stockPHURL:
      "https://financialmodelingprep.com/api/v3/historical-price-full",
    stockAPIURL_quote: "https://financialmodelingprep.com/api/v3/quote",
    stockAPIURL_realtime:
      "https://financialmodelingprep.com/api/v3/quote-short",
    stockMinPriceURL:
      "https://financialmodelingprep.com/api/v3/historical-chart/1min",
    stockBSURL: "https://financialmodelingprep.com/api/v3/income-statement",
    stockISURL:
      "https://financialmodelingprep.com/api/v3/balance-sheet-statement",
    stockCSURL: "https://financialmodelingprep.com/api/v3/cash-flow-statement",
    stockDVURL:
      "https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend",
    stockRatioURL: "https://financialmodelingprep.com/api/v3/ratios",
    LOCALHOSTBACK: "http://127.0.0.1:5000",
    MONGO_URI: "mongodb://127.0.0.1:27017/pfwebsite",
    POSTSPERPAGE: 2,
    stockAPIKEY: process.env.stockAPIKEY,
  },
  images: {
    domains: ["financialmodelingprep.com", "https://financialmodelingprep.com"],
  },
};

module.exports = nextConfig;
module.exports = withMDX(nextConfig);
