import axios from "axios";

export default async function getMinPrice(tickers) {
  try {
    return (
      await axios.get(
        `${process.env.stockMinPriceURL}/${tickers}?apikey=${process.env.stockAPIKEY}`
      )
    ).data;
  } catch (error) {
    console.error(error);
  }
}
