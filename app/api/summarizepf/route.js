import executeQuery from "@/libs/mariadb/excuteQuery";
import { NextResponse } from "next/server";

export async function GET(request) {
  const query =
    "SELECT ticker, CAST(SUM(CASE WHEN typeOfTransaction = 'buy' THEN quantity*price WHEN typeOfTransaction = 'sell' THEN -quantity*price END) AS FLOAT) AS totalEquityPerStock, CAST(SUM(CASE WHEN typeOfTransaction = 'buy' THEN quantity END) AS FLOAT) AS totalQuantityPerStock, CAST(SUM(CASE WHEN typeOfTransaction = 'buy' THEN price*quantity/snpAtTr END) AS FLOAT) AS totalQuantityOfSNP, CAST(SUM(CASE WHEN typeOfTransaction = 'buy' THEN price*quantity/nasdaqAtTr END) AS FLOAT) AS totalQuantityOfNASDAQ FROM transactionHistory GROUP BY ticker;";
  // totalEquityPerStock
  // totalQuantityPerStock
  // totalQuantityOfSNP
  // totalQuantityOfNASDAQ

  try {
    const summaryData = await executeQuery(query);
    return NextResponse.json({ summaryData });
  } catch (error) {
    return NextResponse.json({ message: "failed" }, { status: 401 });
  }
}
