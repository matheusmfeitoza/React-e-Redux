import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Mini Dogs</h1>
      <button className={styles.btn}></button>
    </header>
  );
};

export default Header;
