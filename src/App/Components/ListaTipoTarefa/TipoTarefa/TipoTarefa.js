import React from "react";
import styles from "./TipoTarefa.module.css";

const TipoTarefa = ({ Icone, tipo }) => {
  function handleClick({ currentTarget }) {
    console.log(currentTarget.dataset.tipo); //TODO
  }

  return (
    <button className={styles.tipoTarefa} data-tipo={tipo} onClick={handleClick}>
      {Icone}
    </button>
  );
};

export default TipoTarefa;
