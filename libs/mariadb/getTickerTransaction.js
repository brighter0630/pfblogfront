export default async function getTickerTransaction(ticker) {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/api/gettickertransaction`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          ticker,
        }),
        cache: "reload",
      }
    );

    return res.json();
  } catch (error) {
    console.log("Error in Getting Ticker Transaction Data", error);
  }
}
