import axios from "axios";
const https = require("https");

export async function getPriceHistory(ticker) {
  try {
    const data = (
      await axios.get(
        `${process.env.stockPHURL}/${ticker}?serietype=line&apikey=${process.env.stockAPIKEY}`,
        {
          httpsAgent: new https.Agent({
            rejectUnauthorized: false, //허가되지 않은 인증을 reject하지 않겠다!
          }),
        }
      )
    ).data;
    return {
      symbol: data.symbol,
      historical: data.historical,
    };
  } catch (error) {
    console.log(error);
  }
}
