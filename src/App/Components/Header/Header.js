import React from "react";
import styles from "./Header.module.css";
import { ReactComponent as TaskLogo } from "../../assets/Logo.svg";
import { ReactComponent as NotificacaoIcone } from "../../assets/notificacao.svg";
import { Link } from "react-router-dom";

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
          <div className={styles.notificacao}>
            <Link to="/" data-notificacao="5">
              <NotificacaoIcone />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
