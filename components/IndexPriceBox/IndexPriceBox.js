"use client";

import connectSocketIO from "@/libs/connectSocketIO";
import React, { useEffect, useState } from "react";
import Link from 'next/link';

function IndexPriceBox({ indexTicker, indexTitle }) {
	const [index, setIndex] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const socket = connectSocketIO();
		socket.on("index", ({ realtimeIndex }) => {
			const res = realtimeIndex.filter(
				(eachIndex) => eachIndex.symbol === indexTicker
			);
			if (res !== undefined) {
				setIndex(res[0]);
				setLoading(false);
			}
		});
	}, []);

	return (
		<tbody className="md:w-22">
			{!loading && (
				<tr>
					<th className="text-center text-[#31455b] text-xs md:text-sm min-w-[55px] md:w-24">
						<Link href={`/indexchart/${indexTicker}/3months`} replace={false}>
							{indexTitle}
						</Link>
					</th>
					<td
					className={`${
					index?.changesPercentage > 0
					? "text-red-700"
							: index?.changesPercentage < 0
					? "text-blue-700"
							: "text-black"
					} text-xs md:text-sm text-right pr-1 w-12`}
				>

					<Link href={`/indexchart/${indexTicker}/3months`} replace={false}>
						{index?.price.toLocaleString(undefined, {
							minimumFractionDigits: 2,
							maximumFractionDigits: 2,
						})}
					</Link>
				</td>
				<td
				className={`${
				index?.changesPercentage > 0
					? "text-red-700"
						: index?.changesPercentage < 0
					? "text-blue-700"
						: "text-black"
			} text-xs text-right pr-1 my-auto`}>
				<Link href={`/indexchart/${indexTicker}/3months`} replace={false}>
					{index?.changesPercentage >= 0 && "+"}
					{index?.changesPercentage.toFixed(2)}%
				</Link>
				</td>
				</tr>
			)}
			</tbody>
	);
}

export default IndexPriceBox;
