import executeQuery from "@/libs/mariadb/excuteQuery";
import { NextResponse } from "next/server";

export async function GET(request) {
  const query =
    "SELECT ticker, CAST(SUM(CASE WHEN typeOfTransaction = 'buy' THEN quantity*price WHEN typeOfTransaction = 'sell' THEN -quantity*price END) AS FLOAT) AS numerator, CAST(SUM(CASE WHEN typeOfTransaction = 'buy' THEN quantity END) AS FLOAT) AS denumerator, CAST(SUM(CASE WHEN typeOfTransaction = 'buy' THEN price*quantity/snpAtTr END) AS FLOAT) AS denumeratorOfSNP, CAST(SUM(CASE WHEN typeOfTransaction = 'buy' THEN price*quantity/nasdaqAtTr END) AS FLOAT) AS denumeratorOfNASDAQ FROM transactionHistory GROUP BY ticker;";
  try {
    const summaryData = await executeQuery(query);
    return NextResponse.json({ summaryData });
  } catch (error) {
    return NextResponse.json({ message: "failed" }, { status: 401 });
  }
}
