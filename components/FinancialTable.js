"use client";

import { EntoKo } from '@/translationFinnhub';
import { useState } from "react";
import CustomModal from "./CustomModal";
import formatter from '@/libs/formatter';
import FinancialBarChart from "./BlogContentsComponents/FinancialBarChart";

function FinancialTable({ yearsData, selectedCols }) {
  const [showModal, setShowModal] = useState(
    new Array(selectedCols.length).fill(false)
  );
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  const setModalArray = (i, e) => {
    let tempArray = new Array(selectedCols.length).fill(false);
    tempArray[i] = true;

		setPositionX(e.clientX+50);
    setPositionY(e.clientY-100);
    setShowModal(tempArray);
  };
  const initModalArray = () => {
    setShowModal(new Array(selectedCols.length).fill(false));
  };

  return (
		<div className="overflow-x-auto">
			<table className="my-4 md:my-8 mx-auto">
				<thead>
					<tr className="border-gray-400 border-b-2">
						<th className="p-1 md:p-3 text-xs md:text-sm font-semibold text-center min-w-[75px] md:min-w-[100px]">
							(단위: 백만)
						</th>
						{yearsData.map((yearData, i) => (
							<th
								key={i}
								className="p-1 md:p-3 font-semibold text-left" 
							>
								<p className="text-xs md:text-base text-center">
									{" "}
									{yearData.period.substr(0, 4)}
								</p>
								<p className="text-xs text-right mr-1">
									{yearData.period.substr(5, 2)}월
								</p>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{selectedCols.map((col, i) => (
						<tr key={i}>
							<th
								className="p-1 py-3 md:p-3 text-xs md:text-sm mx-auto text-center grid min-w-[60px] md:min-w-[80px]"
								onMouseEnter={(e) => setModalArray(i, e)}
								onMouseLeave={(e) => initModalArray(i)}
							>
								<span className="text-xs">{EntoKo[col].ko}</span>
								{showModal[i] && (
									<CustomModal
										title={EntoKo[col].ko}
										positionX={positionX}
										positionY={positionY}
										width={350}
										height={180}
									>
										<FinancialBarChart
											chartData={yearsData.map((yearData) => {
												return {
													name: `${yearData["period"].substring(0, 4)} ${yearData[
														"period"
													].substring(5, 7)}월`,
													value: yearData[col],
												};
											})}
											col={col}
										/>
									</CustomModal>
								)}
							</th>
							{yearsData.map((yearData, i) => (
								<td key={i} className="text-xs md:text-base text-right pr-3 md:pr-5">
									{formatter(col, yearData[col], EntoKo)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
  );
}

export default FinancialTable;
