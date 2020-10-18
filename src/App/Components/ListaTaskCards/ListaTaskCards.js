import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./ListaTaskCards.module.css";

const ListaTaskCards = () => {
  return (
    <div className={`${styles.listaTask} container`}>
      <h1>TAREFAS</h1>
      <div className={styles.listaTaskCards}>
        <TaskCard />
      </div>
    </div>
  );
};

export default ListaTaskCards;
