export default async function getMonthTransaction(month, year) {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/getmonthtransaction", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        year,
        month,
      }),
      cache: "reload",
    });

    return res.json();
  } catch (error) {
    console.log("Error in Getting Month Transaction Data", error);
  }
}
