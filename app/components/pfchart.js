import React from "react";
import { getPfData } from "../apis/getPfData";

export default async function Pfchart() {
  const data = await getPfData();
  // const [stockList, setStockList] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch("http://127.0.0.1:5000/getpfdata", {
  //       cache: "no-store",
  //     });
  //     const data = await res.json();
  //     setStockList(data);
  //   };
  //   getData();
  // }, []);
  // console.log(stockList);

  return (
    <div className="flex items-center">
      <ul>
        {console.log(data)}
        {data.map((stock, index) => {
          <li key={index}>
            <span>{stock.ticker}</span>
          </li>;
        })}
      </ul>
    </div>
  );
}
