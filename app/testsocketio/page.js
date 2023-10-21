"use client";

import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

function Page() {
  const socket = io("http://localhost:5000");
  const [msg, setMsg] = useState();
  const sendMsg = () => {
    socket.emit("message", "헬로");
  };

  useEffect(() => {
    socket.on("message", (number) => {
      console.log(`${number} from server`);
      setMsg(number);
    });
  }, [msg]);

  return (
    <div>
      <span>{msg}</span>
      <button onClick={() => sendMsg()}>버튼</button>
    </div>
  );
}

export default Page;
