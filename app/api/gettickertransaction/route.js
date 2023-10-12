import executeQuery from "@/libs/mariadb/excuteQuery";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { ticker } = await request.json();
  const query = `SELECT ticker, dateOfTransaction, typeOfTransaction, price, quantity, nasdaqAtTr, snpAtTr FROM transactionHistory WHERE ticker = "${ticker}";`;

  try {
    const tickerTransctionData = await executeQuery(query);
    return NextResponse.json({ tickerTransctionData });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "에러" }, { status: 401 });
  }
}
