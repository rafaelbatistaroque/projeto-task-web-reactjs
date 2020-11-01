import React from "react";
import styles from "./TaskDetalhesPage.module.css";
import { Outlet } from "react-router-dom";

const TaskDetalhesPage = () => {
  return (
    <section className={`${styles.taskDetalhesPage} container`}>
      <Outlet />
    </section>
  );
};

export default TaskDetalhesPage;
