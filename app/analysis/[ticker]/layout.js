import Link from "next/link";
import CompanyProfile from "@/components/companyProfile";
import { getCompanyProfile } from "@/app/apis/getCompanyProfile";
import getMinPrice from "@/app/apis/getMinPrice";
import AnalysisNavBar from "@/components/AnalysisNavBar";

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
        <AnalysisNavBar ticker={ticker} />
      </div>
      <main>{children}</main>
    </div>
  );
}
