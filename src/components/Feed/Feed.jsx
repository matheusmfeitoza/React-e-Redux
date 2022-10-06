import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Feed = () => {
  const { data } = useSelector((state) => state?.userReducer);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data == null) {
      navigate("/");
    }
  }, [data, navigate]);
  return (
    <>
      <h1>Bem vindo {data?.nome} </h1>
    </>
  );
};
