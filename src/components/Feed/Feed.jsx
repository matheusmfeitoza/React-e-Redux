import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthPhotosAndSaveListPhotos } from "../../Store/Photos/Photos";
import { PhotosFeed } from "./PhotosFeed";
import { FeedBtn } from "./FeedBtn";

export const Feed = () => {
  const { data } = useSelector((state) => state?.photosReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fecthPhotosAndSaveListPhotos());
  }, [dispatch]);

  return (
    <section>
      {data && <PhotosFeed />}
      <FeedBtn />
    </section>
  );
};
