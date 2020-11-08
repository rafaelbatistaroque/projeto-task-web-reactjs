import React from "react";
import { Navigate, Route } from "react-router-dom";
import { LogoutContext } from "../../hooks/LogoutContext";

const RotaAutenticacao = (props) => {
  const { ehLogado } = React.useContext(LogoutContext);

  return ehLogado ? <Route {...props} /> : <Navigate to="/sincronizar" />;
};

export default RotaAutenticacao;
