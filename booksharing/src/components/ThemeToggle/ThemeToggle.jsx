import MyImage from "../MyImage/MyImage";
import styles from "./ThemeToggle.module.scss";

export default function ThemeToggle() {
  return (
    <div className={styles.darkMode}>
      <button
        onClick={() => {
          console.log("Zmiana na ciemny styl");
        }}
      >
        <MyImage width="35" height="35" name="moon" />
      </button>
      <button>
        <MyImage width="35" height="35" name="sun" />
      </button>
    </div>
  );
}
