import React from "react";
import Pfchart from "../components/pfchart";
import styles from "./styles.module.css";

function Dashboard() {
  return (
    <div className={styles.charts}>
      <Pfchart />
    </div>
  );
}

export default Dashboard;
