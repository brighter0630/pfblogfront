import styles from "./styles.module.css";
import Pfchart from "./components/pfchart";

export default async function Home() {
  return (
    <div className={styles.charts}>
      <Pfchart />
    </div>
  );
}
