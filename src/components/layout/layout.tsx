import { Link, Outlet } from "react-router-dom";
import styles from "./layout.module.css";

export const Layout = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.navigationList}>
          <Link to="sentences" className={styles.navigationListButton}>
            Sentences
          </Link>
          <Link to="sentence-challenge" className={styles.navigationListButton}>
            Challenge
          </Link>
        </nav>
      </header>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
