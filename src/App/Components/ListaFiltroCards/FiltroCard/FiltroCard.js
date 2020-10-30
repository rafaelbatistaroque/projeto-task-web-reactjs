import React from "react";
import { TaskContext } from "../../../hooks/TaskContext";
import styles from "./FiltroCard.module.css";

const FiltroCard = ({ titulo, ...rest }) => {
  const { obterTarefas } = React.useContext(TaskContext);

  async function handleTask() {
    await obterTarefas({ titulo, ...rest });
  }

  return (
    <button
      className={`${styles.filtroCard} animarFadeInDeCima`}
      key={titulo}
      data-filtro={titulo}
      onClick={handleTask}
    />
  );
};

export default FiltroCard;