import PropTypes from "prop-types";

import styles from "./Logobar.module.css";

function Logobar({ name, src }) {
  return (
    <>
      <div className={styles.logobar}>
        <img className={styles.img} src={src} alt="its a logo of site" />

        <span className={styles.name}>{name}</span>
      </div>
    </>
  );
}

Logobar.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
};

export default Logobar;
