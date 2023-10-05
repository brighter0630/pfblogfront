// 포트폴리오 종목을 취합하여 정리하는 기능
import axios from "axios";

export async function summarypf(data) {
  try {
    return (await axios.get(`${process.env.LOCALHOSTBACK}/summarypf`)).data;
  } catch (error) {
    console.log(error);
  }
}
