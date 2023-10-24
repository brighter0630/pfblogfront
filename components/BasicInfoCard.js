import BasicFrame from "@/components/BasicFrame";
import { EntoKo } from "@/translation";

const column1 = [
  "mktCap",
  "cik",
  "lastDiv",
  "dividendYielTTM",
  "fullTimeEmployees",
  "yearHigh",
  "yearLow",
];

const column2 = [
  "peRatioTTM",
  "returnOnAssetsTTM",
  "returnOnEquityTTM",
  "priceBookValueRatioTTM",
  "priceSalesRatioTTM",
  "freeCashFlowPerShareTTM",
];

const column3 = [];

export default function BasicInfoCard({ profile }) {
  console.log(profile);
  return (
    <BasicFrame>
      <span className={"m-4 font-medium text-2xl"}>기본 정보</span>
      <div className="grid grid-cols-4 text-black text-opacity-80">
        <table>
          <tbody>
            {column1.map((col, i) => (
              <tr key={i}>
                <th>{EntoKo[col].ko}</th>
                <td>
                  {profile.ratios[0].col
                    ? profile.ratios[0].col
                    : profile.profile.col}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BasicFrame>
  );
}
