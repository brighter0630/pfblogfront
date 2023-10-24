import BasicFrame from "@/components/BasicFrame";
import { EntoKo } from "@/translation";
import formatter from '@/libs/formatter.js';

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
  "priceBookValueRatioTTM",
  "priceSalesRatioTTM",
  "returnOnAssetsTTM",
  "returnOnEquityTTM",
  "freeCashFlowPerShareTTM",
];

const column3 = [
  "title",
  "name",
  "yearBorn",
  "pay",
];

export default function BasicInfoCard({ profile }) {
	const mergedProfile = Object.assign(profile['profile'], {yearHigh: profile['metrics']['yearHigh']}, {yearLow: profile['metrics']['yearLow']}, profile['ratios'][0])
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
                  {formatter(col, mergedProfile[col], EntoKo)}
                </td>
              </tr>
            ))}
          </tbody>
		</table>
		<table>
		  <tbody>
			{column2.map((col, i) => (
					<tr key={i}>
					<th>{EntoKo[col].ko}</th>
					<td>
					{formatter(col, mergedProfile[col], EntoKo)}
					</td>
					</tr>
					))}
		  </tbody>
        </table>
		<table className="col-span-2">
			<thead>
			{column3.map((col, i) => (
							<th key={i}>{EntoKo[col]}</th>
							))
			}
			</thead>
			<tbody>
			{profile.keyExecutives.map((officer, i) => (
						<tr key={i}>
							column3.map((col, j) => (
									<td key={j}> {officer[col]} </td>
							))
						</tr>
						))}
			</tbody>
		</table>
      </div>
    </BasicFrame>
  );
}





