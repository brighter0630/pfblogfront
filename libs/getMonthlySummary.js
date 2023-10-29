export default async function getMonthlySummary() {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/getmonthlysummary`, {
      method: "GET",
      cache: "no-cache",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error in Fetching Monthly Summary", error);
  }
}
