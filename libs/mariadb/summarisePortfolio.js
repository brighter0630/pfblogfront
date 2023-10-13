export default async function summarisePortfolio() {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/summarizepf`, {
      cache: "reload",
    });
    if (!res.ok) {
      throw new Error("Failed to load summary of data", res.ok);
    }

    return res.json();
  } catch (error) {
    console.log("error in summarizing portfolios", error);
  }
}
