import axios from "axios";

export async function getPfData() {
  try {
    return (await axios.get(`${process.env.LOCALHOSTBACK}/getpfdata`)).data;
  } catch (error) {
    console.error(error);
  }
}
