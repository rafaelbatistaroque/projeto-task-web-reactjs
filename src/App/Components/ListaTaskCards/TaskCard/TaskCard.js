import React from "react";
import styles from "./TaskCard.module.css";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { IconesTipoTarefa, IconesStatusTarefa } from "../../../utils/IconesTarefa";

const TaskCard = ({ titulo, quando, tipo, feito }) => {
  return (
    <button className={`${styles.taskCard}`}>
      <div className={`${styles.cabecalhoTaskCard}`}>
        {IconesTipoTarefa[tipo]}
        <span>{titulo}</span>
      </div>
      <div className={`${styles.prazoEStatusTaskCard}`}>
        <div className={styles.prazo}>
          <span>{format(new Date(quando), "dd")}</span>
          <span>{format(new Date(quando), "MMM", { locale: ptBR })}</span>
        </div>
        {IconesStatusTarefa[feito]}
      </div>
    </button>
  );
};

export default TaskCard;
