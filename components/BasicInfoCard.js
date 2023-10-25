"use client";

import BasicFrame from "@/components/BasicFrame";
import { EntoKo } from "@/translation";
import formatter from "@/libs/formatter.js";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export const column1 = [
  "mktCap",
  "cik",
  "lastDiv",
  "dividendYielTTM",
  "fullTimeEmployees",
  "yearHigh",
  "yearLow",
];

export const column2 = [
  "peRatioTTM",
  "priceBookValueRatioTTM",
  "priceSalesRatioTTM",
  "returnOnAssetsTTM",
  "returnOnEquityTTM",
  "returnOnCapitalEmployedTTM",
  "freeCashFlowPerShareTTM",
];

// export const column3 = ["title", "name", "yearBorn", "pay"];

export default function BasicInfoCard({ profile }) {
  const [loading, setLoading] = useState(true);
  const [mergedProfile, setMergedProfile] = useState();

  useEffect(() => {
    setMergedProfile(
      Object.assign(
        profile["profile"],
        { yearHigh: profile["metrics"]["yearHigh"] },
        { yearLow: profile["metrics"]["yearLow"] },
        profile["ratios"][0]
      )
    );
    setLoading(false);
  }, [profile]);

  if (loading) {
    return <Loading />;
  }

  return (
    <BasicFrame>
      <span className={"m-4 font-medium text-2xl"}>기본 정보</span>
      <div className="grid grid-cols-2 text-black text-opacity-80 my-4">
        <table className="text-center mx-auto">
          <tbody>
            {column1.map((col, i) => (
              <tr key={i}>
                <th className="min-w-[150px] py-1">{EntoKo[col].ko}</th>
                <td className="min-w-[150px] py-1">
                  {formatter(col, mergedProfile[col], EntoKo)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="text-center mx-auto">
          <tbody>
            {column2.map((col, i) => (
              <tr key={i}>
                <th className="min-w-[150px] py-1">{EntoKo[col].ko}</th>
                <td className="min-w-[150px] py-1">
                  {formatter(col, mergedProfile[col], EntoKo)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <table className="col-span-4">
          <thead>
            {column3.map((col, i) => {
              <th key={i}>{EntoKo[col]}</th>;
            })}
          </thead>
          <tbody>
            {profile.keyExecutives.map((officer, i) => (
              <tr key={i}>
                {column3.map((col, j) => (
                  <td key={j}> {officer[col]} </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </BasicFrame>
  );
}
