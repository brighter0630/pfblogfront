import axios from "axios";
const https = require("https");

export async function getCompanyProfile(ticker) {
  try {
    return (
      await axios.get(
        `${process.env.stockAPIURL_profile}/${ticker}?apikey=${process.env.stockAPIKEY}`,
        {
          httpsAgent: new https.Agent({
            rejectUnauthorized: false, //허가되지 않은 인증을 reject하지 않겠다!
          }),
        }
      )
    ).data[0];
  } catch (error) {
    console.log(error);
  }
}
