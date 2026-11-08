import styles from "./Link.module.css";

export default function Link({ href = "", children }) {
  return (
    <a className={styles.link} href={href}>
      {children}
    </a>
  );
}
