import Logobar from "../Logobar/Logobar";
import Navbar from "../Navbar/Navbar";
import img from "../../assets/bookIcon_dark.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Logobar className={styles.logobar} src={img} name={"BookFlow"} />
      <Navbar className={styles.navbar} />
    </div>
  );
}
