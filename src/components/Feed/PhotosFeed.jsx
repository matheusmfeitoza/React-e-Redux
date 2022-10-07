import React from "react";
import styles from "./PhotoFeed.module.css";

export const PhotosFeed = ({ photo }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={photo?.src} alt={photo?.title} />
      <div className={styles.infos}>
        <span className={styles.spn}>{photo?.title}</span>
        <span className={styles.acessos}>{photo?.acessos}</span>
      </div>
    </div>
  );
};
