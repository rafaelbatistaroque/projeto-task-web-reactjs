import React from "react";
import ListaTipoTarefa from "../../components/ListaTipoTarefa/ListaTipoTarefa";
import styles from "./TaskDetalhesPage.module.css";
import Form from "../../components/Form/Form";

const TaskDetalhesPage = () => {
  return (
    <section className={`${styles.taskDetalhesPage} container`}>
      <ListaTipoTarefa />
      <Form />
    </section>
  );
};

export default TaskDetalhesPage;
