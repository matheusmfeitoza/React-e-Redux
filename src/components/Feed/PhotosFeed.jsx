import React from "react";
import { useSelector } from "react-redux";
import styles from "./PhotoFeed.module.css";

export const PhotosFeed = () => {
  const { list } = useSelector((state) => state.photosReducer);
  return list?.map((item) => {
    return (
      <ul className={styles.ul} key={item.id}>
        <li className={styles.li}>
          <img className={styles.img} src={item.src} alt={item.title} />
          <h2 className={styles.title}>{item.title}</h2>
          <span className={styles.acessos}>{item.acessos}</span>
        </li>
      </ul>
    );
  });
};
