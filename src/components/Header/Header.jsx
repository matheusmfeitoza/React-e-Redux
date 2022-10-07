import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.module.css";
import { logout } from "../../Store/helper/Logout";
const Header = () => {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(logout());
  };
  const { userReducer, tokenReducer } = useSelector((state) => state);
  const loading = userReducer.loading || tokenReducer.loading;
  const { data } = userReducer;
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Mini Dogs</h1>
      <button
        onClick={handleClick}
        className={`${styles.btn} ${loading ? styles.loading : ""}  ${
          data ? styles.logged : ""
        }`}
      ></button>
    </header>
  );
};

export default Header;
