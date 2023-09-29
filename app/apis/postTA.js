import axios from "axios";

export async function postTA(data) {
  try {
    await axios.post("http://127.0.0.1:5000/postta", data);
    //   fetch("http://127.0.0.1:5000/postta", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     mode: "cors",
    //     body: JSON.stringify(data),
    //   });
  } catch (error) {
    console.log(error);
  } finally {
    console.log("fetch successful");
  }
}
