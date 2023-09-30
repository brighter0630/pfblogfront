import axios from "axios";

export async function postTA(data) {
  try {
    await axios.post("http://127.0.0.1:5000/postta", data);
    alert("입력 완료");
  } catch (error) {
    console.log(error);
    alert(`${error}`);
  } finally {
    console.log("fetch successful");
  }
}
