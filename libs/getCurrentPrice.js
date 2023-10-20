import axios from "axios";

export default async function getCurrentPrice(tickers) {
  try {
    return (
      await axios.get(
        `${process.env.stockAPIURL_quote}/${tickers}?apikey=${process.env.stockAPIKEY}`
      )
    ).data;
  } catch (error) {
    console.error(error);
  }
}
