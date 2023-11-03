import DividendNavBar from "@/components/DividendNavBar";

function DVLayout({ children, params }) {
  const { ticker } = params;

  return (
    <div className="mx-auto text-opacity-90 font-semibold text-black flex flex-col gap-0">
      <DividendNavBar ticker={ticker} />
      <main>{children}</main>
    </div>
  );
}

export default DVLayout;
