"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function CompanyProfile({ profile, minPrice }) {
  const route = useRouter();

  if (profile === undefined || minPrice === undefined) {
    route.push("/ticker-not-found");
    return false;
  } else {
    return (
      <div className="grid grid-cols-4 text-black text-opacity-80">
        <div className="mx-auto my-4 p-0 col-span-2">
          <Image
            src={profile.image}
            width={200}
            height={200}
            priority
            className="bg-slate-400 p-4 rounded-lg"
            alt={profile.companyName}
          />
          <div className="text-center my-4 text-xl">
            <Link href={`${profile.website}`} target="_blank">
              <span className="text-center">{profile.companyName}</span>
            </Link>
          </div>
        </div>
        <div className="col-span-1 grid grid-rows-4 h-5/6 my-auto">
          <div className="text-center">
            <span>{profile.exchangeShortName}</span>
          </div>
          <div className="text-center">
            <span>현지시간 </span>
            <span>{minPrice.date.substring(0, 4)}년 </span>
            <span>{minPrice.date.substring(5, 7)}월 </span>
            <span>{minPrice.date.substring(8, 10)}일 </span>
            <span>{minPrice.date.substring(11, 13)}시</span>
            <span>{minPrice.date.substring(14, 16)}분</span>
          </div>
          <div className="text-center">
            <span className={`text-5xl ${profile.price === null && "hidden"}`}>
              ${minPrice.close}
            </span>
            <span className={`text-5xl ${profile.price !== null && "hidden"}`}>
              거래 정지
            </span>
          </div>
          <div
            className={`text-center gap-0 ${
              profile.changes >= 0 ? "text-red-700" : "text-blue-700"
            } ${profile.price === null && "hidden"}`}
          >
            <span className={`${profile.changes < 0 && "hidden"}`}>+</span>
            <span className="text-2xl">{profile.changes}</span>
            <span className="text-base m-2">
              (
              {(
                Math.round((profile.changes / profile.price) * 10000) / 100
              ).toFixed(2)}
              %)
            </span>
          </div>
        </div>
        <div className="grid grid-rows-3 text-center font-normal p-4 invisible lg:visible">
          <div className="grid grid-flow-row h-1/5">
            <span className="text-sm">섹터</span>
            <span className="text-2xl">{profile.sector}</span>
          </div>
          <div className="grid grid-flow-row h-1/5">
            <span className="text-sm">산업</span>
            <span className="text-2xl">{profile.industry}</span>
          </div>
          <div className="grid grid-flow-row h-1/5">
            <span className="text-sm">CEO</span>
            <span className="text-2xl">{profile.ceo}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyProfile;
