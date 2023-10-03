import axios from "axios";
const https = require("https");

export default async function getCurrentPrice(tickers) {
  try {
    return (
      await axios.get(
        `${process.env.stockAPIURL_quote}/${tickers}?apikey=${process.env.stockAPIKEY}`,
        {
          httpsAgent: new https.Agent({
            rejectUnauthorized: false, //허가되지 않은 인증을 reject하지 않겠다!
          }),
        }
      )
    ).data;
  } catch (error) {
    console.error(error);
  }
}
