import BasicFrame from "@/components/BasicFrame";
import TransactionTable from "@/components/TransactionTable";
import getMonthTransaction from "@/libs/mariadb/getMonthTransaction";

export default async function TransactionListByDate({ params }) {
  const { monthTransctionData } = await getMonthTransaction(
    params.date.substring(5, 7),
    params.date.substring(0, 4)
  );

  return (
    <div>
      <BasicFrame>
        <h1 className="text-center text-2xl font-bold">거래 기록</h1>
        {monthTransctionData === undefined ? (
          <div className="py-4 px-10">
            {params.date.substring(5, 7)}월의 거래 기록이 존재하지 않습니다.
          </div>
        ) : (
          <TransactionTable data={monthTransctionData} />
        )}
      </BasicFrame>
    </div>
  );
}
