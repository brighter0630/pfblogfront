import axios from "axios";

export async function getAfterMarketPrice(ticker) {
  try {
    return (
      await axios.get(
        `${process.env.stockAPIAfterMarket}/${ticker}?apikey=${process.env.stockAPIKEY}`
      )
    ).data;
  } catch (error) {
    console.log(error);
  }
}
