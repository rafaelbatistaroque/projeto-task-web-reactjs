import React from "react";
import styles from "./Button.module.css";

const Button = ({ tipoButton, estiloBotao = "normal", tituloBotao, desabilitar = false, onClick = null }) => {
  return (
    <button className={`${styles.button} ${estiloBotao}`} type={tipoButton} disabled={desabilitar} onClick={onClick}>
      {tituloBotao}
    </button>
  );
};

export default Button;
