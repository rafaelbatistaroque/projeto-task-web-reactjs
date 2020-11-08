import React from "react";
import { TaskContext } from "../../hooks/TaskContext";
import FiltroCard from "./FiltroCard/FiltroCard";
import styles from "./ListaFiltroCards.module.css";

const ListaFiltroCards = () => {
  const { obterTarefas, obterTarefasAtrasadas } = React.useContext(TaskContext);
  const parametrosAtrasadas = { titulo: "Atrasadas", endPoint: "atrasadas" };
  const filtros = [
    { titulo: "Todas", endPoint: "todas" },
    { titulo: "Hoje", endPoint: "hoje" },
    { titulo: "Semana", endPoint: "semana" },
    { titulo: "Mês", endPoint: "mes" },
    { titulo: "Ano", endPoint: "ano" },
  ];

  React.useEffect(() => {
    obterTarefas({ ...filtros[0] });
    obterTarefasAtrasadas(parametrosAtrasadas);
  }, []);

  return (
    <div className={`${styles.listaFiltroCards}`}>
      {filtros.map((filtro, index) => (
        <FiltroCard key={index} {...filtro} />
      ))}
    </div>
  );
};

export default ListaFiltroCards;
