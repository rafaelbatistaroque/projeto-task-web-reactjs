import React from "react";
import FiltroCard from "../FiltroCard/FiltroCard";
import styles from "./ListaFiltroCards.module.css";

const ListaFiltroCards = () => {
  const filtros = [{ titulo: "Todos" }, { titulo: "Hoje" }, { titulo: "Semana" }, { titulo: "Mês" }, { titulo: "Ano" }];
  return (
    <div className={`${styles.listaFiltroCards} container`}>
      {filtros.map((cadaFiltro) => (
        <FiltroCard key={cadaFiltro.titulo} titulo={cadaFiltro.titulo} />
      ))}
    </div>
  );
};

export default ListaFiltroCards;
