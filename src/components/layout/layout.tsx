import { Link, Outlet } from "react-router-dom";
import styles from "./layout.module.css";

export const Layout = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.navigationList}>
          <Link
            to="sentence-management"
            className={styles.navigationListButton}
          >
            State Management
          </Link>
          <Link to="sentence-challenge" className={styles.navigationListButton}>
            State Challenge
          </Link>
        </nav>
      </header>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
