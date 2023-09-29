import axios from "axios";

export async function getPfData() {
  return (await axios.get("http://127.0.0.1:5000/getpfdata")).data;
}
