import Link from "next/link";

async function PCPageLayout({ children, params }) {
  const { ticker } = params;

  return (
    <div className="p-5 m-4 overflow-y-visible text-opacity-90 font-semibold text-black grid gap-5 grid-flow-row font-['NanumBarunPen']">
      <div className="grid grid-flow-col">
        <span className="text-4xl text-center">
          {ticker.toUpperCase()}의 주가차트
        </span>
        <ul className="grid grid-flow-col w-5/12 justify-end gap-5 mx-auto">
          <li>
            <Link href={`/analysis/${ticker}/pc/week`}>1주일</Link>
          </li>
          <li>
            <Link href={`/analysis/${ticker}/pc/3months`}>3개월</Link>
          </li>
          <li>
            <Link href={`/analysis/${ticker}/pc/year`}>1년</Link>
          </li>
          <li>
            <Link href={`/analysis/${ticker}/pc/3years`}>3년</Link>
          </li>
          <li>
            <Link href={`/analysis/${ticker}/pc/10years`}>10년</Link>
          </li>
          <li>
            <Link href={`/analysis/${ticker}/pc/max`}>MAX</Link>
          </li>
        </ul>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default PCPageLayout;
