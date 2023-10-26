"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import printDateYYYYMMDDhhmm from "@/libs/printDateYYYYMMDDhhmm";
import connectSocketIO from "@/libs/connectSocketIO";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import BasicFrame from "@/components/BasicFrame";

function CompanyProfile({ profile, afterMarketPrice }) {
  const route = useRouter();
  if (profile === undefined || Object.keys(profile).length === 0) {
    route.push("/ticker-not-found");
  }

  const [realTimePrice, setRealTimePrice] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const socket = connectSocketIO();
    socket.on("price", ({ realtimeData }) => {
      const result = realtimeData.filter((el) => el.symbol === profile.symbol);

      if (result.length !== 0) {
        setRealTimePrice(result[0].price);
        setLoading(false);
      } else if (profile?.price !== null) {
        setRealTimePrice(profile?.price);
        setLoading(false);
      }
      if (result.length === 0 && profile?.price === null) {
        setRealTimePrice(false);
        setLoading(false);
      }
    });
  }, [profile]);

  if (loading) {
    return <Loading />;
  }

  return (
    <BasicFrame>
      <span className={"m-4 font-medium text-2xl"}>요약 정보</span>
      <div className="grid grid-cols-4 text-black text-opacity-80">
        <div className="mx-auto my-4 p-0 col-span-2 flex justify-center align-middle">
          <div className="my-auto">
            <Image
              src={profile?.image}
              width={200}
              height={200}
              priority
              className="bg-slate-400 p-4 rounded-lg mx-auto"
              alt={profile?.companyName}
            />
            <div className="text-center my-4 text-xl">
              <Link href={`${profile?.website}`} target="_blank">
                <span className="text-center">{profile?.companyName}</span>
              </Link>
            </div>
            <div className="text-center my-auto">
              <span>{profile?.exchangeShortName}</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 grid grid-rows-3 my-auto px-1">
          <div className="text-center my-auto">
            <span className="text-sm">{printDateYYYYMMDDhhmm(new Date())}</span>
          </div>
          {realTimePrice === false ? (
            <span className="text-center text-lg text-red-800">거래중단</span>
          ) : (
            <div
              className={`text-center gap-0 ${
                profile?.changes >= 0 ? "text-red-700" : "text-blue-700"
              }`}
            >
              {/* 현재가격 */}
              <span className={`text-5xl`}>
                $
                {realTimePrice.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </span>
              <p className={`text-2xl`}>
                <span
                  className={`${
                    realTimePrice - (profile?.price - profile?.changes) < 0 &&
                    "hidden"
                  }`}
                >
                  +
                </span>
                {(realTimePrice - (profile?.price - profile?.changes)).toFixed(
                  2
                )}
              </p>
              <span className="text-base m-2">
                (
                {(
                  Math.round(
                    (realTimePrice / (profile?.price - profile?.changes) - 1) *
                      10000
                  ) / 100
                ).toFixed(2)}
                %)
              </span>
            </div>
          )}

          <div className="grid grid-rows-2 gap-0 my-auto text-center">
            <span className="text-xs my-auto">장외거래</span>
            {afterMarketPrice.timestamp === 0 || realTimePrice === false ? (
              <div>정보 없음</div>
            ) : (
              <div>
                <p className="text-xs max-w-fit mx-auto">
                  {printDateYYYYMMDDhhmm(afterMarketPrice.timestamp)}
                </p>
                <span>${afterMarketPrice.price}</span>
                <span className="text-sm my-auto mx-1">
                  {afterMarketPrice.price - profile.price > 0 && "+"}
                  {(
                    Math.round((afterMarketPrice.price - profile.price) * 100) /
                    100
                  ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </span>
                <span>
                  ({afterMarketPrice.price - profile.price > 0 && "+"}
                  {(
                    Math.round(
                      (afterMarketPrice.price / profile.price - 1) * 10000
                    ) / 100
                  ).toFixed(2)}
                  %)
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-rows-3 text-center font-normal items-center justify-center">
          <div className="flex flex-col h-1/5">
            <span className=" text-sm">섹터</span>
            <span className="text-2xl">{profile?.sector}</span>
          </div>
          <div className="grid grid-flow-row h-1/5">
            <span className="text-sm">산업</span>
            <span className="text-2xl">{profile?.industry}</span>
          </div>
          <div className="grid grid-flow-row h-1/5">
            <span className="text-sm">CEO</span>
            <a
              target="_blank"
              href={`https://www.google.com/search?q=${profile.ceo}`}
              rel="noopener noreferrer"
            >
              <span className="text-sm font-bold">{profile?.ceo}</span>
            </a>
          </div>
        </div>
      </div>
    </BasicFrame>
  );
}

export default CompanyProfile;
