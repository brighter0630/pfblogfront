import DividendNavBar from "@/components/DividendNavBar";
import Link from "next/link";

function DVLayout({ children, params }) {
  const { ticker } = params;
  return (
    <div className="p-5 m-4 overflow-y-visible text-opacity-90 font-semibold text-black grid gap-5 grid-flow-row font-['NanumBarunPen']">
      <DividendNavBar ticker={ticker} />
      <main>{children}</main>
    </div>
  );
}

export default DVLayout;
