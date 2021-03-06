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
      type="button"
      className={`${styles.filtroCard} animarFadeInDeCima sombra-box`}
      key={titulo}
      data-filtro={titulo}
      onClick={handleTask}
    />
  );
};

export default FiltroCard;
