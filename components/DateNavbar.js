"use client";

import getMonthAgo from "@/libs/getMonthAgo";
import getMonthLater from "@/libs/getMonthLater";
import printDateMonth from "@/libs/printDateMonth";
import Link from "next/link";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function DateNavbar() {
  const date = new Date();
  const [lastMonth, setLastMonth] = useState(
    printDateMonth(new Date(date.getFullYear(), date.getMonth(), 1) - 1)
  );

  return (
    <div className="py-5 flex flex-row justify-center text-center">
      <Link href={`/transactionhistory/${getMonthAgo(lastMonth)}`}>
        <BiChevronLeft
          className="my-auto text-2xl"
          onClick={() => setLastMonth(getMonthAgo(lastMonth))}
        />
      </Link>
      {printDateMonth(lastMonth).substring(0, 4)}년{" "}
      {printDateMonth(lastMonth).substring(5, 7)}월
      <Link href={`/transactionhistory/${getMonthLater(lastMonth)}`}>
        <BiChevronRight
          className="my-auto text-2xl"
          onClick={() => setLastMonth(getMonthLater(lastMonth))}
        />
      </Link>
    </div>
  );
}
