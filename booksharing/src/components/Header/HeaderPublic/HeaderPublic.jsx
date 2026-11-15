import { useState } from "react";
import Logobar from "../../Logobar/Logobar";
import MyIcon from "../../MyIcon/MyIcon";
import styles from "../HeaderPublic/HeaderPublic.module.scss";
import { Link } from "react-router-dom";
import MyImage from "../../MyImage/MyImage";

function HeaderPublic() {
  return (
    <>
      {/* Header container for styling container that is visible for every user that are not logged in 
          Style - actually   */}
      <div className={styles.container}>
        {/* Not logged user should see: 
            - HEADER -> Logo -> Links: Home, Catalogue, About, Contact -> DarkMode -> Login*/}

        {/* Logobar */}
        <Logobar />
        {/* Links */}
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            <MyIcon fill="#101525" name="home" />
            Home
          </Link>
          <Link to="/catalogue" className={styles.link}>
            <MyIcon fill="#101525" name="book" />
            Catalogue
          </Link>
          <Link to="/about" className={styles.link}>
            <MyIcon fill="#101525" name="info" />
            About us
          </Link>
          <Link to="/contact" className={styles.link}>
            <MyIcon fill="#101525" name="phone" />
            Contact
          </Link>
        </nav>
        <div className={styles.rightSide}>
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

          <button className={styles.loginBtn}>
            <MyIcon name="user" /> Login
          </button>
        </div>
      </div>
    </>
  );
}

export default HeaderPublic;
