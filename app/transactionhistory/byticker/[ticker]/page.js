import getTickerTransaction from "@/libs/mariadb/getTickerTransaction";
import BasicFrame from "@/components/BasicFrame";
import TransactionTable from "@/components/TransactionTable";
import Head from "next/head";

async function TransactionListByTicker({ params }) {
  const { tickerTransctionData } = await getTickerTransaction(params.ticker);

  return (
    <div>
      <Head>
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dividendgrowthinvesting.co.kr"
        />
        <meta property="og:title" content="이웃집백만장자 거래 기록" />
        <meta
          property="og:description"
          content="배당성장주 포트폴리오의 실제 거래 내역을 티커별로 직접 확인하자."
        />
      </Head>
      <BasicFrame>
        <h1 className="text-center text-2xl font-bold">거래 기록</h1>
        {tickerTransctionData === undefined ||
        tickerTransctionData.length === 0 ? (
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
