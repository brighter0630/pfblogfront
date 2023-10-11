import getMonthTransaction from "@/libs/mariadb/getMonthTransaction";

export default async function TransactionList({ params }) {
  const { monthTransctionData } = getMonthTransaction(
    params.date.substring(5, 7),
    params.date.substring(0, 4)
  );

  return (
    <div>
      <div>거래 기록</div>
    </div>
  );
}
