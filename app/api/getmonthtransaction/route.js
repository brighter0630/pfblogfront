import executeQuery from "@/libs/mariadb/excuteQuery";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { year, month } = await request.json();
  const query = `SELECT * FROM transactionHistory WHERE MONTH(dateOfTransaction) = ${month} AND YEAR(dateOfTransaction) = ${year};`;
  try {
    const monthTransctionData = await executeQuery(query);
    console.log(monthTransctionData);
    return NextResponse.json({ monthTransctionData });
  } catch (error) {
    return NextResponse.json({ message: "에러" }, { status: 401 });
  }
}
