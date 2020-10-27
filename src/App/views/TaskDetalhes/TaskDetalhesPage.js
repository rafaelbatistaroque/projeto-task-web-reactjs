import React from "react";
import ListaTipoTarefa from "../../components/ListaTipoTarefa/ListaTipoTarefa";
import styles from "./TaskDetalhesPage.module.css";

const TaskDetalhesPage = () => {
  return (
    <div className={styles.taskdetalhespage}>
      <ListaTipoTarefa />
    </div>
  );
};

export default TaskDetalhesPage;
