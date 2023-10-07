import connectDB from "./mongodb";

export default async function summarisePortfolio() {
  try {
    const res = await fetch("http://localhost:3000/api/summarizepf", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to load summary of data");
    }
    return res.json();
  } catch (error) {
    console.log("error in summarizing portfolios", error);
  }
}
