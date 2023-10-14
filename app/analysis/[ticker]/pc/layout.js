import NavBar from "../../../../components/StockPriceNavBar";

async function PCPageLayout({ children, params }) {
  const { ticker } = params;

  return (
    <div className="p-5 m-4 overflow-y-visible text-opacity-90 font-semibold text-black grid gap-5 grid-flow-row font-['NanumBarunPen']">
      <div className="grid grid-flow-col justify-between">
        <span className="text-4xl text-center pl-3">
          {ticker.toUpperCase()}의 주가차트
        </span>
        <NavBar ticker={ticker} />
      </div>
      <main>{children}</main>
    </div>
  );
}

export default PCPageLayout;
