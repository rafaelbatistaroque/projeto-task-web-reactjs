import React from "react";
import styles from "./TipoTarefa.module.css";

const TipoTarefa = ({ Icone, tipo, setValor }) => {
  function handleClick({ currentTarget }) {
    setValor(currentTarget.dataset.tipo);
  }

  return (
    <button className={styles.tipoTarefa} data-tipo={tipo} onClick={handleClick}>
      {Icone}
    </button>
  );
};

export default TipoTarefa;
