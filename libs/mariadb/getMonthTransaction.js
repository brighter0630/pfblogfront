export default async function getMonthTransaction(month, year) {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/getmonthtransaction`, {
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
