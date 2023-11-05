"use client"

import { useEffect } from 'react';
import connectSocketIO from '@/libs/finnhub/SocketConnect';

export default function LeftFirstSidebar(){
	useEffect(() => {
			const socket = connectSocketIO();
			socket.on('message', ({ data }) => {
			console.log(data);
	}, [])
	});

	return (
		<section><h1>LeftFirstSideBar</h1></section>
	)
}
