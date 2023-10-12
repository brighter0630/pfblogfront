import executeQuery from "@/libs/mariadb/excuteQuery";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { year, month } = await request.json();
  const query = `SELECT * FROM transactionHistory WHERE MONTH(dateOfTransaction) = ${month} AND YEAR(dateOfTransaction) = ${year};`;

  try {
    const monthTransctionData = await executeQuery(query);
    return NextResponse.json({ monthTransctionData });
  } catch (error) {
    console.log("에러 아닌감", error);
    return NextResponse.json({ message: "에러" }, { status: 401 });
  }
}
