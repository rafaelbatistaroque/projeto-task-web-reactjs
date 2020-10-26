import React from "react";
import styles from "./Header.module.css";
import { ReactComponent as TaskLogo } from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import Notificacao from "../Notificacao/Notificacao";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Task - Home">
          <TaskLogo />
        </Link>
        <div className={styles.menu}>
          <Link to="/">Início</Link>
          <Link to="/">Nova Tarefa</Link>
          <Link to="/">Sincronizar</Link>
          <Notificacao />
        </div>
      </nav>
    </header>
  );
};

export default Header;
