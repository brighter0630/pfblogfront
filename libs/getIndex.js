import axios from "axios";

export async function getNasdaqIndex(howManyDays) {
  const res = (
    await axios.get(
      `${process.env.stockPHURL}/%5EIXIC?apikey=${process.env.stockAPIKEY}`
    )
  ).data.historical.slice(0, howManyDays);
  return res;
}

export async function getSNPIndex(howManyDays) {
  const res = (
    await axios.get(
      `${process.env.stockPHURL}/%5EGSPC?apikey=${process.env.stockAPIKEY}`
    )
  ).data.historical.slice(0, howManyDays);
  return res;
}
