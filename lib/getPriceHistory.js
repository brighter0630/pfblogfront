import axios from "axios";

export async function getPriceHistory(ticker) {
  try {
    const data = (
      await axios.get(
        `${process.env.stockPHURL}/${ticker}?serietype=line&apikey=${process.env.stockAPIKEY}`
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
