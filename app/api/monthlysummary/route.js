import executeQuery from "@/libs/mariadb/excuteQuery";
import { NextResponse } from "next/server";

export async function POST(req) {
  const monthsBetween = await req.json();
  const arrayOfTotalAsset = await Promise.all(
    monthsBetween.map(async (date) => {
      const query = `SELECT ticker, CAST(SUM(CASE WHEN typeOfTransaction = 'buy' THEN quantity*price WHEN typeOfTransaction = 'sell' THEN -quantity*price END) AS FLOAT) AS
      totalEquityPerStock, CAST(SUM(CASE WHEN typeOfTransaction = 'buy' THEN quantity END) AS FLOAT) AS totalQuantityPerStock, CAST(SUM(CASE WHEN typeOfTransaction = 'buy' THEN price*quantity/snpAtTr END) AS FLOAT) AS totalQuantityOfSNP, CAST(SUM(CASE WHEN typeOfTransaction = 'buy' THEN price*quantity/nasdaqAtTr END) AS FLOAT) AS totalQuantityOfNASDAQ FROM (SELECT * from transactionHistory WHERE dateOfTransaction BETWEEN '2023-09-01' AND '${date}-01') AS CHOSEN GROUP BY ticker;
      `;
      try {
        const data = await executeQuery(query);
        return { date: date, summary: data };
      } catch (error) {
        console.log("에러", error);
        return NextResponse.json({ message: "에러" }, { status: 401 });
      }
    })
  );

  return NextResponse.json({ arrayOfTotalAsset });
}
