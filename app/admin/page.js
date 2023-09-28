"use client";
import React, { useState } from "react";

function Admin() {
  const submitTransaction = (info) => {
    console.log("submit transaction info");
    console.log(info.target);
  };
  const [ticker, setTicker] = useState("");
  return (
    <>
      <main>Admin Page</main>
      <div className="db-enter-container">
        <form method="post" onSubmit={submitTransaction(ticker)}>
          <label>
            <span>Ticker</span>
            <input name="ticker" type="text" onChange={submitTransaction} />
          </label>
        </form>
        <div className="dateOfTransaction">DateOfTransaction</div>
        <div className="typeOfTransaction">TypeOfTransaction</div>
      </div>
    </>
  );
}

export default Admin;
