//const WebSocket = require('ws');
//const socket = new WebSocket(`${process.env.WEBSOCKET_FINNHUB}${process.env.STOCK_API_FINNHUB}`);
//export default socket;

// import { io } from 'socket.io-client';
function connectSocketIO() {
	const WebSocket = require('ws');

	return WebSocket('wss://ws.finnhub.io?token=cl13ii9r01qjtj5mqtu0cl13ii9r01qjtj5mqtug');
}

export default connectSocketIO;
