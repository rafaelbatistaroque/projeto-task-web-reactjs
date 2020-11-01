import React from "react";
import styles from "./TaskCard.module.css";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { IconesTipoTarefa, IconesStatusTarefa } from "../../../utils/IconesTarefa";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ titulo, quando, tipo, feito, indexTarefa }) => {
  const navegarPara = useNavigate();

  function handleEditarTarefa() {
    navegarPara(`/task/editar/${indexTarefa}`);
  }

  return (
    <button type="button" className={`${styles.taskCard}`} onClick={handleEditarTarefa}>
      <div className={`${styles.cabecalhoTaskCard} animarFadeInDeCima`}>
        {IconesTipoTarefa[tipo]}
        <span>{titulo}</span>
      </div>
      <div className={`${styles.prazoEStatusTaskCard} animarFadeInDeCima`}>
        <div className={styles.prazo}>
          <span>{new Date(quando).getUTCDate()}</span>
          <span>{format(new Date(quando), "MMM", { locale: ptBR })}</span>
        </div>
        {IconesStatusTarefa[feito]}
      </div>
    </button>
  );
};

export default TaskCard;
