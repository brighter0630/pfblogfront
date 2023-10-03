import { getCompanyProfile } from "@/app/apis/getCompanyProfile";
import CompanyProfile from "@/app/components/companyProfile";

async function TickerPage({ params }) {
  const { ticker } = params;
  const profile = await getCompanyProfile(ticker);
  return (
    <div className="p-5 m-4 overflow-y-visible text-opacity-90 font-semibold text-black grid gap-5 grid-flow-row font-['NanumBarunPen']">
      <div className="m-4 p-4 border-4 ">
        <span className={"m-4 font-medium text-2xl"}>요약 정보</span>
        <CompanyProfile profile={profile} />
      </div>
    </div>
  );
}

export default TickerPage;
