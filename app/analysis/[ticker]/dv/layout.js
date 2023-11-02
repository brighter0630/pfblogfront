import DividendNavBar from "@/components/DividendNavBar";

function DVLayout({ children, params }) {
  const { ticker } = params;

  return (
    <div className="mx-auto overflow-x-visible text-opacity-90 font-semibold text-black grid gap-0 grid-flow-row">
      <DividendNavBar ticker={ticker} />
      <main>{children}</main>
    </div>
  );
}

export default DVLayout;
