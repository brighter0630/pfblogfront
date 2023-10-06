import React from "react";

function DividendCard(data) {
  return (
    <table>
      <th>날짜</th>
      <td>{data.date}</td>
    </table>
  );
}

export default DividendCard;
