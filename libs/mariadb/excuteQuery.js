import { connectDB } from ".";

export default async function executeQuery(query) {
  try {
    const conn = await connectDB();
    const res = await conn.query(query);
    console.log("Query Succeeded!!");

    return res;
  } catch (error) {
    throw new Error(`Query: ${query} has Failed`, error);
  }
}
