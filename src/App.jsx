import React from "react";
import { useDispatch } from "react-redux";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import "./Global.css";
import { autoLogin } from "./Store/helper/Login";
function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}

export default App;
