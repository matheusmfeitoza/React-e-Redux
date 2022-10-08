import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthPhotosAndSaveListPhotos } from "../../Store/Photos/Photos";
import { Loading } from "../Helper/Loading";
import styles from "./FeedBtn.module.css";

export const FeedBtn = () => {
  const dispatch = useDispatch();
  const { page, isInfinite, loading } = useSelector(
    (state) => state.photosReducer
  );
  const handleClick = () => {
    dispatch(fecthPhotosAndSaveListPhotos(page + 1));
  };
  if (!isInfinite) return null;
  return loading ? (
    <Loading />
  ) : (
    <button className={styles.btn} onClick={handleClick}>
      +
    </button>
  );
};
