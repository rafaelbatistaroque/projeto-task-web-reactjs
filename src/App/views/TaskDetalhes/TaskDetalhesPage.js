import React from "react";
import styles from "./TaskDetalhesPage.module.css";
import Form from "../../components/Form/Form";

const TaskDetalhesPage = () => {
  return (
    <section className={`${styles.taskDetalhesPage} container`}>
      <Form />
    </section>
  );
};

export default TaskDetalhesPage;
