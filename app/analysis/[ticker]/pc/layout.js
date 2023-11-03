import PriceChartNavbar from "@/components/PriceChartNavbar";

async function PCPageLayout({ children, params }) {
  const { ticker } = params;

  return (
    <div className="p-2 md:p-5 m-1 md:m-4 text-opacity-90 font-semibold text-black gap-5 flex flex-col">
      <div className="flex flex-col justify-between">
        <span className="collapse max-w-0 max-h-0 md:max-w-none md:max-h-none md:visible text-2xl md:text-4xl text-center pl-3">
          {ticker.toUpperCase()}의 주가차트
        </span>
        <PriceChartNavbar ticker={ticker} />
      </div>
      <main>{children}</main>
    </div>
  );
}

export default PCPageLayout;
