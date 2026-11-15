import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import MyImage from "../../components/MyImage/MyImage";
import MyIcon from "../../components/MyIcon/MyIcon";

function Home() {
  return (
    <>
      <div className={styles.container}>
        {/* Not logged user should see
            - Home page -> on home page should be possibility to create account /login to existing accoutn
            - Home Page -> Big splash screen on left with topic about the page and big title  
            - Home Page -> Login form on right side of the page*/}
        <div className={styles.leftSide}>
          <h2 className={styles.heroTitle}>
            Book<span>Flow</span>
          </h2>
          <p className={styles.heroSubtitle}>
            Share with books, <br />
            discover new!
          </p>
          <div className={styles.divider}></div>
          <p className={styles.heroText}>
            Share books, build community that love read books
          </p>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.loginForm}>
            <div className={styles.heading}>
              <MyImage width="80" height="80" name="bookIcon_light" />
              <p className={styles.title}>Welcome Back!</p>
              <p className={styles.subtitle}>Login to your account</p>
            </div>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <MyIcon name="envelop" fill="black" />
                <input type="email" name="email" placeholder="Address e-mail" />
              </div>
              <div className={styles.formGroup}>
                <MyIcon name="lock" fill="black" />
                <input
                  type="password"
                  name="password"
                  placeholder="Yours Password"
                />
              </div>
              <div className={styles.formOptions}>
                <div className={styles.formOptionsCheckbox}>
                  <input type="checkbox" name="remember" id="remember" />
                  <span>Remember this PC</span>
                </div>
                <Link className={styles.links} to="/recovery">
                  Recover my password
                </Link>
              </div>
              <button className={styles.loginButton}>Log in</button>
            </form>
            <p>
              Don't have account ?{" "}
              <Link className={styles.links} to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
