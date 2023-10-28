import IndexPriceDiv from "@/components/IndexPriceDiv";
import CompanyProfile from "@/components/CompanyProfile";
import { getCompanyProfile } from "@/libs/getCompanyProfile";
import AnalysisNavBar from "@/components/AnalysisNavBar";
import { getAfterMarketPrice } from "@/libs/getAfterMarketPrice";
import BasicInfoCard from "@/components/BasicInfoCard";

export const metadata = {
  title: "배당성장주 무료 10년 재무제표",
  content: "10년 간의 재무지표와 배당 기록을 통해 기업을 분석한다.",
};

export default async function AnalysisLayout({ children, params }) {
  const { ticker } = params;
  const profile = await getCompanyProfile(ticker);
  const afterMarketPrice = await getAfterMarketPrice(ticker);

  return (
    <div className="p-5 my-2 mx-auto text-opacity-90 font-semibold text-black">
      <div className="mx-auto w-full grid gap-3 grid-flow-row">
        <IndexPriceDiv />
        <CompanyProfile
          profile={profile.profile}
          afterMarketPrice={afterMarketPrice}
        />
        <BasicInfoCard profile={profile} />
        <AnalysisNavBar ticker={ticker} />
      </div>
      <main className="mx-auto w-full">{children}</main>
    </div>
  );
}
