import React from "react";
import styles from "./TaskCard.module.css";
import { ReactComponent as IconTaskDefault } from "../../Assets/esporte.svg";
import { ReactComponent as IconConcluida } from "../../Assets/concluida.svg";

const TaskCard = ({ tituloTarefa }) => {
  return (
    <button className={`${styles.taskCard}`}>
      <div className={`${styles.cabecalhoTaskCard}`}>
        <IconTaskDefault />
        <span>Titulo Tarefa</span>
      </div>
      <div className={`${styles.prazoEStatusTaskCard}`}>
        <span>17 Out</span>
        <IconConcluida />
      </div>
    </button>
  );
};

export default TaskCard;
