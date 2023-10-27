import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function LoadingTable() {
  return (
    <tbody>
      <tr>
        <td>
          <AiOutlineLoading3Quarters className="text-xl animate-spin my-1" />
        </td>
      </tr>
    </tbody>
  );
}

export default LoadingTable;
