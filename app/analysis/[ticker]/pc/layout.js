import PriceChartNavbar from "@/components/PriceChartNavbar";

async function PCPageLayout({ children, params }) {
  const { ticker } = params;

  return (
    <div className="p-2 md:p-5 m-1 md:m-4 text-opacity-90 font-semibold text-black gap-5 flex flex-col">
      <div className="flex flex-col justify-between">
        <h3 className="hidden md:flex text-xl md:text-3xl text-left pl-3 py-3 my-3">
          {ticker.toUpperCase()}의 주가차트
        </h3>
        <PriceChartNavbar ticker={ticker} />
      </div>
      <main>{children}</main>
    </div>
  );
}

export default PCPageLayout;
