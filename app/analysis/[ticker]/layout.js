import CompanyProfile from "@/components/CompanyProfile";
import { getCompanyProfile } from "@/libs/getCompanyProfile";
import getMinPrice from "@/libs/getMinPrice";
import AnalysisNavBar from "@/components/AnalysisNavBar";
import BasicFrame from "@/components/BasicFrame";

export default async function AnalysisLayout({ children, params }) {
  const { ticker } = params;
  const profile = await getCompanyProfile(ticker);
  const minPrice = (await getMinPrice(ticker))[0];

  return (
    <div className="p-5 py-2 my-2 mx-auto text-opacity-90 font-semibold text-black grid gap-3 grid-flow-row font-['NanumBarunPen']">
      <div className="mx-auto">
        <BasicFrame>
          <span className={"m-4 font-medium text-2xl"}>요약 정보</span>
          <CompanyProfile profile={profile} minPrice={minPrice} />
        </BasicFrame>
      </div>
      <div>
        <AnalysisNavBar ticker={ticker} />
      </div>
      <main>{children}</main>
    </div>
  );
}
