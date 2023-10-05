import axios from "axios";

export async function getCompanyProfile(ticker) {
  try {
    return (
      await axios.get(
        `${process.env.stockAPIURL_profile}/${ticker}?apikey=${process.env.stockAPIKEY}`
      )
    ).data[0];
  } catch (error) {
    console.log(error);
  }
}
