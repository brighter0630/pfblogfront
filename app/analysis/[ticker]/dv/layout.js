import DividendNavBar from "@/components/DividendNavBar";

function DVLayout({ children, params }) {
  const { ticker } = params;

  return (
    <div className="p-5 m-4 overflow-y-visible text-opacity-90 font-semibold text-black grid gap-5 grid-flow-row">
      <DividendNavBar ticker={ticker} />
      <main>{children}</main>
    </div>
  );
}

export default DVLayout;
