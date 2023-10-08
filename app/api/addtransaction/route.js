import { NextResponse } from "next/server";
import executeQuery from "@/libs/mariadb/excuteQuery";

export async function POST(request) {
  try {
    const {
      ticker,
      dateOfTransaction,
      typeofTransaction,
      price,
      quantity,
      snpAtTr,
      nasdaqAtTr,
    } = await request.json();
    const insertTradeRecord = `INSERT INTO transactionHistory(ticker, dateOfTransaction, typeOfTransaction, price, quantity, snpAtTr, nasdaqAtTr) VALUES ('${ticker}', '${dateOfTransaction}', '${typeofTransaction}', ${price}, ${quantity}, ${snpAtTr}, ${nasdaqAtTr});`;
    executeQuery(insertTradeRecord);

    return NextResponse.json({ message: "Done" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "failed" }, { status: 401 });
  }
}
