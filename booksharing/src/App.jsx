import styles from "./App.module.css";

import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Content />
    </div>
  );
}

export default App;
