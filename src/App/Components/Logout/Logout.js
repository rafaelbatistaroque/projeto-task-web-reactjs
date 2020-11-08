import React from "react";
import { NavLink } from "react-router-dom";
import { LogoutContext } from "../../hooks/LogoutContext";

const Logout = (props) => {
  const { ehLogado, setEhLogado } = React.useContext(LogoutContext);

  return (
    (ehLogado && (
      <a href="#" onClick={() => setEhLogado("")}>
        Sair
      </a>
    )) || <NavLink {...props}>Sincronizar</NavLink>
  );
};

export default Logout;
