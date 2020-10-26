import React from "react";
import { TaskContext } from "../../hooks/TaskContext";
import TaskCard from "./TaskCard/TaskCard";
import styles from "./ListaTaskCards.module.css";

const ListaTaskCards = () => {
  const { tarefas, tituloTipoTarefa } = React.useContext(TaskContext);
  return (
    <div className={`${styles.listaTask} container`}>
      <h1>{tituloTipoTarefa}</h1>
      <div className={styles.listaTaskCards}>
        {tarefas && tarefas.map((tarefa) => <TaskCard key={tarefa._id} {...tarefa} />)}
      </div>
    </div>
  );
};

export default ListaTaskCards;
