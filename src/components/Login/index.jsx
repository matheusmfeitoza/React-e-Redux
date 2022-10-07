import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, autoLogin } from "../../Store/helper/Login";
import style from "./style.module.css";

export const Login = () => {
  //Hooks e ações do redux
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.tokenReducer);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ username, password }));
  };

  React.useEffect(() => {
    if (data && data.token != null) {
      dispatch(autoLogin(data.token));
    }
  }, [data, dispatch]);
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
