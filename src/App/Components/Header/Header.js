import React from "react";
import styles from "./Header.module.css";
import { ReactComponent as TaskLogo } from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import ContadorTaskAtrasada from "../Notificacao/ContadorTaskAtrasada/ContadorTaskAtrasada";
import Logout from "../Logout/Logout";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav} container`}>
        <NavLink to="/" aria-label="Task - Home">
          <TaskLogo />
        </NavLink>
        <div className={`${styles.menu} animarFadeInDeCima`}>
          <NavLink to="/" end activeClassName={styles.active}>
            Início
          </NavLink>
          <NavLink to="/task/adicionar" activeClassName={styles.active}>
            Nova Tarefa
          </NavLink>
          <Logout to="/sincronizar" activeClassName={styles.active} />
          <ContadorTaskAtrasada />
        </div>
      </nav>
    </header>
  );
};

export default Header;
