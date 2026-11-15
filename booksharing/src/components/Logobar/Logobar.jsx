import MyImage from "../MyImage/MyImage";
import styles from "../Logobar/Logobar.module.scss";
import { Link } from "react-router-dom";

export default function Logobar() {
  return (
    <>
      <Link className={styles.container} to="/">
        <MyImage width="50" height="50" name="bookIcon_light" />
        <span className={styles.logoText}>
          Book<span>Flow</span>
        </span>
      </Link>
    </>
  );
}
