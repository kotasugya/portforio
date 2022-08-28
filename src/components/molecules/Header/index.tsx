import Link from "next/link";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <>
      <header className="header flex-box">
        <Link href="./">
          <h1 className={styles.siteTitle}>ポートフォリオサンプル</h1>
        </Link>
        <nav className={styles.headerNav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="./">
                <img
                  src="../../../Images/simbol-logo.svg"
                  alt="DIGSMILE INC."
                />
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about">About us</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/works">Works</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/culture">Culture</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="topics">Topics</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <button className={styles.burgerBtn}>
          <span className={styles.bar}>
            <span className={`${styles.bar} ${styles.barTop}`}></span>
            <span className={`${styles.bar} ${styles.barMid}`}></span>
            <span className={`${styles.bar} ${styles.barBottom}`}></span>
          </span>
          <span className={styles.menu}>menu</span>
        </button>
        <span className={styles.burgerMusk}></span>
      </header>
    </>
  );
};
