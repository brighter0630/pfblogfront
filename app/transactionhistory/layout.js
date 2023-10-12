import DateNavbar from "@/components/DateNavbar";

function TransactionHistoryLayout({ children }) {
  return (
    <div className="flex-row text-black">
      <DateNavbar />
      <main>{children}</main>
    </div>
  );
}

export default TransactionHistoryLayout;
