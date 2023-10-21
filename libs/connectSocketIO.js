import { io } from "socket.io-client";

function connectSocketIO() {
  return io(process.env.SOCKETIOHOST, { rejectUnauthorized: false });
}

export default connectSocketIO;
