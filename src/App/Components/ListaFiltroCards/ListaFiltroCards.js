import React from "react";
import FiltroCard from "../FiltroCard/FiltroCard";
import styles from "./ListaFiltroCards.module.css";

const ListaFiltroCards = () => {
  const filtros = [
    { titulo: "Todos", endPoint: "todas" },
    { titulo: "Hoje", endPoint: "hoje" },
    { titulo: "Semana", endPoint: "semana" },
    { titulo: "Mês", endPoint: "mes" },
    { titulo: "Ano", endPoint: "ano" },
  ];
  
  return (
    <div className={`${styles.listaFiltroCards} container`}>
      {filtros.map(({ titulo, endPoint }) => (
        <FiltroCard key={titulo} titulo={titulo} endPoint={endPoint} />
      ))}
    </div>
  );
};

export default ListaFiltroCards;
