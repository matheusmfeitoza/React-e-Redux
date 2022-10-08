import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Store/helper/Login";
import style from "./style.module.css";

export const Login = () => {
  //Hooks e ações do redux
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ username, password }));
  };

  return (
    <form onSubmit={handleSubmit} className={style.formLogin}>
      <label htmlFor="username" className={style.label}>
        Usuário
      </label>
      <input
        className={style.ipt}
        id="username"
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />

      <label htmlFor="password" className={style.label}>
        Senha
      </label>
      <input
        className={style.ipt}
        id="password"
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button className={style.btn}>Entrar</button>
    </form>
  );
};
