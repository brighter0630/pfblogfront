import DateNavbar from "@/components/DateNavbar";

function TransactionHistoryLayout({ children }) {
  return (
    <div>
      <DateNavbar />
      <main>{children}</main>
    </div>
  );
}

export default TransactionHistoryLayout;
