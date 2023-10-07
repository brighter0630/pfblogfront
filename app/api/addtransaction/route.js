import { NextResponse } from "next/server";
import connectDB from "@/libs/db/mongodb";

export async function POST(request) {
  try {
    await connectDB();
    const {
      ticker,
      dateOfTransaction,
      typeofTransaction,
      price,
      quantity,
      snpAtTr,
      nasdaqAtTr,
    } = await request.json();

    const Pf = require("@/libs/db/models/portfolio");
    await Pf.create({
      ticker,
      dateOfTransaction,
      typeofTransaction,
      price,
      quantity,
      snpAtTr,
      nasdaqAtTr,
    });

    return NextResponse.json({ message: "Done" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 501 });
  }
}
