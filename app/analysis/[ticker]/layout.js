import CompanyProfile from "@/components/CompanyProfile";
import { getCompanyProfile } from "@/libs/getCompanyProfile";
import AnalysisNavBar from "@/components/AnalysisNavBar";
import { getAfterMarketPrice } from "@/libs/getAfterMarketPrice";
import BasicInfoCard from "@/components/BasicInfoCard";
import Head from "next/head";

export default async function AnalysisLayout({ children, params }) {
  const { ticker } = params;
  const profile = await getCompanyProfile(ticker);
  const afterMarketPrice = await getAfterMarketPrice(ticker);

  return (
    <div className="p-5 my-2 mx-auto text-opacity-90 font-semibold text-black grid gap-3 grid-flow-row">
      <Head>
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dividendgrowthinvesting.co.kr"
        />
        <meta property="og:title" content="배당성장주 기업 분석" />
        <meta
          property="og:description"
          content="10년 간의 재무지표와 배당 기록을 통해 기업을 분석한다."
        />
      </Head>
      <div className="mx-auto w-full">
        <CompanyProfile
          profile={profile.profile}
          afterMarketPrice={afterMarketPrice}
        />
      </div>
      <BasicInfoCard profile={profile} />
      <div className="mx-auto w-full">
        <AnalysisNavBar ticker={ticker} />
      </div>
      <main className="mx-auto w-full">{children}</main>
    </div>
  );
}
