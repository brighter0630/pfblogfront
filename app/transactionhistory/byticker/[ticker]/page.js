import getTickerTransaction from "@/libs/mariadb/getTickerTransaction";
import BasicFrame from "@/components/BasicFrame";
import TransactionTable from "@/components/TransactionTable";

async function TransactionListByTicker({ params }) {
  const { tickerTransctionData } = await getTickerTransaction(params.ticker);

  return (
    <div>
      <BasicFrame>
        <h1 className="text-center text-2xl font-bold">거래 기록</h1>
        {tickerTransctionData === undefined ? (
          <div className="py-4 px-10">
            {params.ticker}의 거래 기록이 존재하지 않습니다.
          </div>
        ) : (
          <TransactionTable data={tickerTransctionData} />
        )}
      </BasicFrame>
    </div>
  );
}

export default TransactionListByTicker;
