"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useRouter } from "next/navigation";

function SubmitTransactionForm() {
  const [ticker, setTicker] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [dateOfTransaction, setDateOfTransaction] = useState();
  const [typeofTransaction, setTypeofTransaction] = useState();
  const route = useRouter();

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const histNASDAQ = (
        await axios.get(
          `${process.env.stockPHURL}/%5EIXIC?apikey=${process.env.stockAPIKEY}`
        )
      ).data.historical.slice(0, 100);

      const histSNP = (
        await axios.get(
          `${process.env.stockPHURL}/%5EGSPC?apikey=${process.env.stockAPIKEY}`
        )
      ).data.historical.slice(0, 100);

      const snpAtTr = histSNP.filter(
        (d) => d.date === String(dateOfTransaction.toJSON()).substring(0, 10)
      )[0].open;

      const nasdaqAtTr = histNASDAQ.filter(
        (d) => d.date === String(dateOfTransaction.toJSON()).substring(0, 10)
      )[0].open;

      const res = await fetch("http://localhost:3000/api/addtransaction", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          ticker,
          dateOfTransaction: String(dateOfTransaction.toJSON()).substring(
            0,
            10
          ),
          typeofTransaction,
          price,
          quantity,
          snpAtTr,
          nasdaqAtTr,
        }),
      });
      if (res.ok) {
        console.log("done!!!");
        route.push(`/`);
      } else {
        throw new Error("Failed to create a Document");
        console.error(res.statusText);
      }
    } catch (error) {
      console.log("fetch 과정에서 에러가 발생함.", error);
    }
  };

  return (
    <form
      method="post"
      className="items-center flex flex-col"
      onSubmit={(e) => submitData(e)}
    >
      <h2 className="text-3xl m-4">Admin Page</h2>
      <label className="m-2">
        <span className="mr-4">Ticker</span>
        <input
          type="text"
          onChange={(e) => setTicker(e.target.value)}
          value={ticker}
        />
      </label>
      <label className="m-2">
        <span className="mr-4">거래일</span>
        <DatePicker
          selected={dateOfTransaction}
          onChange={(date) => setDateOfTransaction(date)}
        />
      </label>
      <label className="m-2">
        <span className="mr-4">가격</span>
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </label>
      <label className="m-2">
        <span className="mr-4">수량</span>
        <input
          type="text"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
        />
      </label>
      <div className="m-2 flex">
        <span className="mr-2">거래방식</span>
        <div className="m-2">
          <label htmlFor="buy">
            매수
            <input
              type="radio"
              value="buy"
              name="typeOfTransaction"
              onChange={(e) => setTypeofTransaction(e.target.value)}
              id="buy"
            />
          </label>
        </div>
        <div className="m-2">
          <label htmlFor="sell">
            매도
            <input
              type="radio"
              value="sell"
              name="typeOfTransaction"
              onChange={(e) => setTypeofTransaction(e.target.value)}
              id="sell"
            />
          </label>
        </div>
      </div>
      <button className="m-20 bg-zinc-600 p-2" type="submit">
        Submit
      </button>
    </form>
  );
}

export default SubmitTransactionForm;
