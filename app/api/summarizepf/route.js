import { NextResponse } from "next/server";
import connectDB from "@/libs/db/mongodb";

const pipeline = require("@/libs/db/aggregateSummaryPipepline");

export async function GET() {
  try {
    await connectDB();
    const Pf = require("@/libs/db/models/portfolio");
    const summaryData = await Pf.aggregate(pipeline);

    return NextResponse.json({ summaryData });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 501 });
  }
}
