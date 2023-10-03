import axios from "axios";

export async function getPfData() {
  return (await axios.get(`${process.env.LOCALHOSTBACK}/getpfdata`)).data;
}
