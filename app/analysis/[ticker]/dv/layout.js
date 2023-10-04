import Link from "next/link";

function DVLayout({ children, params }) {
  const { ticker } = params;
  return (
    <div className="p-5 m-4 overflow-y-visible text-opacity-90 font-semibold text-black grid gap-5 grid-flow-row font-['NanumBarunPen']">
      <ul className="grid grid-flow-col w-5/12 justify-end gap-5 mx-auto">
        <li>
          <Link href={`/analysis/${ticker}/dv/year`}>1년</Link>
        </li>
        <li>
          <Link href={`/analysis/${ticker}/dv/5years`}>5년</Link>
        </li>
        <li>
          <Link href={`/analysis/${ticker}/dv/10years`}>10년</Link>
        </li>
        <li>
          <Link href={`/analysis/${ticker}/dv/20years`}>20년</Link>
        </li>
        <li>
          <Link href={`/analysis/${ticker}/dv/max`}>최대</Link>
        </li>
      </ul>
      <main>{children}</main>
    </div>
  );
}

export default DVLayout;
