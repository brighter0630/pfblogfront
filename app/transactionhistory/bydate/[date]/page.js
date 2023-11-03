import BasicFrame from "@/components/BasicFrame";
import TransactionTable from "@/components/TransactionTable";
import getMonthTransaction from "@/libs/mariadb/getMonthTransaction";
import Head from "next/head";

export default async function TransactionListByDate({ params }) {
  const { monthTransctionData } = await getMonthTransaction(
    params.date.substring(5, 7),
    params.date.substring(0, 4)
  );

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
          content="배당성장주 포트폴리오의 실제 거래 내역을 직접 확인하자."
        />
      </Head>
      <BasicFrame>
        <h1 className="text-center text-xl md:text-2xl font-bold">거래 기록</h1>
        {monthTransctionData === undefined ||
        monthTransctionData.length === 0 ? (
          <div className="text-sm md:text-base py-2 px-5 md:py-4 md:px-10">
            {params.date.substring(5, 7)}월의 거래 기록이 존재하지 않습니다.
          </div>
        ) : (
          <TransactionTable data={monthTransctionData} />
        )}
      </BasicFrame>
    </div>
  );
}
