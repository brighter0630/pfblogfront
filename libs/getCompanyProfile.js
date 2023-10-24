import axios from "axios";

export async function getCompanyProfile(ticker) {
  try {
    return (
      await axios.get(
		`${process.env.stockAPIURL_outlook}${ticker}&apikey=${process.env.stockAPIKEY}`
      )
    ).data;
  } catch (error) {
    console.log(error);
  }
}

// `${process.env.stockAPIURL_profile}/${ticker}?apikey=${process.env.stockAPIKEY}`
