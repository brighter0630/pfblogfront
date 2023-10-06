import { EntoKo } from "@/translation";

function DividendCard({ historical }) {
  const selectedCols = [
    "declarationDate",
    "date",
    "recordDate",
    "paymentDate",
    "adjDividend",
  ];
  return (
    <table>
      {selectedCols.map((col, i) => (
        <tr key={i}>
          <th className="p-2 font-light text-sm">{EntoKo[col].ko}</th>
          <td className="p-2 text-right mr-2">{historical[0][col]}</td>
        </tr>
      ))}
      <tr>
        <th className="p-2 font-light text-sm">최근 배당 증가율</th>
        <td className="p-2 text-right mr-2">
          {Math.round(
            (historical[0].adjDividend / historical[3].adjDividend - 1) * 10000
          ) / 100}{" "}
          %
        </td>
      </tr>
      <tr>
        <th className="p-2 font-light text-sm">직전 분기 배당금</th>
        <td className="p-2 text-right mr-2">{historical[1].adjDividend}</td>
      </tr>
      <tr>
        <th className="p-2 font-light text-sm">작년 배당금</th>
        <td className="p-2 text-right mr-2">{historical[3].adjDividend}</td>
      </tr>
    </table>
  );
}

export default DividendCard;
