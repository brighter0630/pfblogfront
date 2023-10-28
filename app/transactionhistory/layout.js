import DateNavbar from "@/components/DateNavbar";
import GoBackButton from '@/components/GoBackButton';
import ToTheTopButton from '@/components/ToTheTopButton';

function TransactionHistoryLayout({ children }) {
  return (
    <div className="flex-row justify-between text-black">
      <DateNavbar />
      <main>{children}</main>
			<div className="flex px-5">
				<ToTheTopButton />
				<GoBackButton />
			</div>
    </div>
  );
}

export default TransactionHistoryLayout;
