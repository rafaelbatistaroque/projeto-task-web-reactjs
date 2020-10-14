import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <small>Task - Organizar é nossa tarefa | Quase todos os direitos reservados</small>
    </footer>
  );
};

export default Footer;
