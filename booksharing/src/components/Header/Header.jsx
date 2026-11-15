import styles from "./Header.module.scss";
import HeaderPublic from "./HeaderPublic/HeaderPublic";

export default function Header() {
  return (
    <>
      <div className={styles.wrapper}>
        <HeaderPublic />
      </div>
    </>
  );
}
