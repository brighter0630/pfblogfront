import axios from "axios";

export async function postTA(data) {
  try {
    await axios.post(`${process.env.LOCALHOSTBACK}/postta`, data);
    alert("입력 완료");
  } catch (error) {
    console.log(error);
    alert(`${error}`);
  } finally {
    console.log("fetch successful");
  }
}
