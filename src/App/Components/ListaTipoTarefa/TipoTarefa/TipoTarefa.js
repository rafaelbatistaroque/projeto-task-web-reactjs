import React from "react";
import styles from "./TipoTarefa.module.css";

const TipoTarefa = ({ Icone, tipo, setValor, valor }) => {
  function handleClick({ currentTarget }) {
    setValor(currentTarget.dataset.tipo);
  }

  return (
    <button
      className={`${tipo == valor ? styles.tipoTarefaAtiva : styles.tipoTarefa}`}
      data-tipo={tipo}
      onClick={handleClick}
    >
      {Icone}
      {tipo == valor && valor}
    </button>
  );
};

export default TipoTarefa;
