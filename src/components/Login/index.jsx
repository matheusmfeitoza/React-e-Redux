import React from "react";
import style from "./style.module.css";

export const Login = () => {
  //Hooks e ações do redux
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <form className={style.formLogin}>
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
