import connectDB from "../db/mongodb";

export default async function summarisePortfolio() {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/summarizepf", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to load summary of data", res.ok);
    }

    return res.json();
  } catch (error) {
    console.log("error in summarizing portfolios", error);
  }
}
