import Link from "next/link";
import CompanyProfile from "@/app/components/companyProfile";
import { getCompanyProfile } from "@/app/apis/getCompanyProfile";
import getMinPrice from "@/app/apis/getMinPrice";

export default async function AnalysisLayout({ children, params }) {
  const { ticker } = params;
  const profile = await getCompanyProfile(ticker);
  const minPrice = (await getMinPrice(ticker))[0];

  return (
    <div className="p-5 m-4 overflow-y-visible text-opacity-90 font-semibold text-black grid gap-5 grid-flow-row font-['NanumBarunPen']">
      <div className="m-4 p-4 border-4 ">
        <span className={"m-4 font-medium text-2xl"}>요약 정보</span>
        <CompanyProfile profile={profile} minPrice={minPrice} />
      </div>
      <div>
        <ul className="grid grid-flow-col justify-evenly">
          <li className="border-2 p-2 px-6 min-w-[200px] text-center transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-500">
            <Link href={`/analysis/${ticker}/pc/3months`} replace={true}>
              주가
            </Link>
          </li>
          <li className="border-2 p-2 px-6 min-w-[200px] text-center transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-500">
            <Link href={`/analysis/${ticker}/bs`} replace={true}>
              <span>대차대조표</span>
            </Link>
          </li>
          <li className="border-2 p-2 px-6 min-w-[200px] text-center transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-500">
            <Link href={`/analysis/${ticker}/is`} replace={true}>
              <span>손익계산서</span>
            </Link>
          </li>
          <li className="border-2 p-2 px-6 min-w-[200px] text-center transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-500">
            <Link href={`/analysis/${ticker}/cs`} replace={true}>
              <span>현금흐름표</span>
            </Link>
          </li>
          <li className="border-2 p-2 px-6 min-w-[200px] text-center transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-500">
            <Link href={`/analysis/${ticker}/dv/10years`} replace={true}>
              <span>배당 정보</span>
            </Link>
          </li>
        </ul>
      </div>
      <main>{children}</main>
    </div>
  );
}
