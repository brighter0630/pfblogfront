"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { postTA } from "../../lib/postTA";

function Admin() {
  const [ticker, setTicker] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [dateOfTransaction, setDateOfTransaction] = useState();
  const [typeofTransaction, setTypeofTransaction] = useState();

  const submitData = async (e) => {
    e.preventDefault();
    alert(
      `입력된 ticker는 ${ticker}, 날짜는 ${dateOfTransaction} 거래타입은 ${typeofTransaction} 가격은 ${price} 수량은 ${quantity} 입니다.`
    );
    const res = await postTA({
      ticker,
      dateOfTransaction,
      typeofTransaction,
      price,
      quantity,
    });
    if (res) {
      alert(`성공적으로 전송됨. res: ${res}`);
    }
  };
  return (
    <main className="db-contents-container">
      <form
        method="post"
        className="items-center flex flex-col "
        onSubmit={submitData}
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
    </main>
  );
}

export default Admin;
