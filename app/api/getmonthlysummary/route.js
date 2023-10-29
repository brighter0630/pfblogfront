import executeQuery from "@/libs/mariadb/excuteQuery";
import { NextResponse } from "next/server";

export async function GET(req) {
      try {
				const query = "SELECT DATE_FORMAT(date, '%Y-%m-%d') as date, ROUND(SUM(totalQuantityPerStock * close)) AS total from monthlySummary GROUP BY date;";
        const res = await executeQuery(query);
				return NextResponse.json(res);
      } catch (error) {
        console.log("에러", error);
        return NextResponse.json({ message: "에러" }, { status: 401 });
      }
}
