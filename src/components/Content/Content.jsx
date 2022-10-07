import React from "react";
import { useSelector } from "react-redux";
import { Login } from "../Login/index";
import { Feed } from "../Feed/Feed";
import { Loading } from "../Helper/Loading";

const Content = () => {
  const { tokenReducer, userReducer } = useSelector((state) => state);
  const loading = tokenReducer.loading || userReducer.loading;
  const { data } = userReducer;
  if (loading) return <Loading />;
  return <section>{data ? <Feed /> : <Login />}</section>;
};

export default Content;
