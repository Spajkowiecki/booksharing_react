import Link from "../Link/Link";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav>
        <ul className={styles.list}>
          <li className={styles.listElement}>
            <Link href="/panel">Panel</Link>
          </li>
          <li className={styles.listElement}>
            <Link href="/library">Library</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
