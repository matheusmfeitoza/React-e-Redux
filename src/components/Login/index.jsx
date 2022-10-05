import React from "react";
import style from "./style.module.css";
import { fetchToken } from "../../Store/Token/Token.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../Store/User/User";

export const Login = () => {
  //Hooks e ações do redux
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispastch = useDispatch();
  const { data } = useSelector((state) => state.tokenReducer);
  const { data: user } = useSelector((state) => state.userReducer);
  const { loading } = useSelector((state) => state.userReducer);

  // Função para realizar login
  const getLogin = () => async (dispatch) => {
    try {
      const { payload } = await dispatch(fetchToken({ username, password }));
      if (payload && payload.token !== null) {
        await dispastch(fetchUser(payload.token));
      }
    } catch {
      console.log("Falha na requisição Fetch");
    }
  };

  // Função para realizar autologin
  const autoLogin = React.useCallback(
    (token) => async (dispastch) => {
      try {
        await dispastch(fetchUser(token));
      } catch {
        console.log("Sem token para realização do fetch");
      }
    },
    []
  );

  // Função para realizar ação do botão
  const handleSubmit = (event) => {
    event.preventDefault();
    dispastch(getLogin());
  };

  // Efeito para disparar a função do autologin
  React.useEffect(() => {
    if (data?.token) {
      dispastch(autoLogin(data?.token));
    }
  }, [autoLogin, data?.token, dispastch]);
  if (loading) return <p>Carregando...</p>;
  return user?.email ? (
    <div>
      <h1>
        Bem vindo <span>{user?.nome}</span>
      </h1>
    </div>
  ) : (
    <div className={style.wrapperLogin}>
      <form onSubmit={handleSubmit} className={style.formLogin}>
        <label htmlFor="username">Usuário</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />

        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <button>Entrar</button>
      </form>
    </div>
  );
};
