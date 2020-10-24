import React from "react";
import styles from "./TaskCard.module.css";
import { ReactComponent as IconTaskDefault } from "../../Assets/esporte.svg";
import { ReactComponent as IconConcluida } from "../../Assets/concluida.svg";
import { format } from 'date-fns';
import  ptBR from 'date-fns/locale/pt-BR';

const TaskCard = ({ tituloTarefa, quando }) => {
  return (
    <button className={`${styles.taskCard}`}>
      <div className={`${styles.cabecalhoTaskCard}`}>
        <IconTaskDefault />
        <span>{tituloTarefa}</span>
      </div>
      <div className={`${styles.prazoEStatusTaskCard}`}>
        <div className={styles.prazo}>
          <span>{format(new Date(quando), 'dd')}</span>
          <span>{format(new Date(quando), 'MMM', {locale: ptBR})}</span>
        </div>
        <IconConcluida />
      </div>
    </button>
  );
};

export default TaskCard;
