import React from "react";
import ListaTipoTarefa from "../../components/ListaTipoTarefa/ListaTipoTarefa";
import styles from "./TaskDetalhesPage.module.css";
import Form from "../../components/Form/Form";

const TaskDetalhesPage = () => {
  return (
    <div className={`${styles.taskDetalhesPage} container`}>
      <ListaTipoTarefa />
      <Form />
    </div>
  );
};

export default TaskDetalhesPage;
