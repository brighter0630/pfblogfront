export default async function getMonthlySummary(monthsBetween) {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/monthlysummary`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(monthsBetween),
      cache: "no-cache",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error in Fetching Monthly Summary", error);
  }
}
