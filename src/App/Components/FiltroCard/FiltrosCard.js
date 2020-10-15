import React from "react";
import styles from "./FiltrosCard.module.css";

const FiltrosCard = () => {
  const filtros = [{ titulo: "Todos" }, { titulo: "Hoje" }, { titulo: "Semana" }, { titulo: "Mês" }, { titulo: "Ano" }];
  return (
    <div className={`${styles.filtroCardLista} container`}>
      {filtros.map((cadaFiltro) => (
        <button className={styles.filtroCard} key={cadaFiltro.titulo} data-filtro={cadaFiltro.titulo} />
      ))}
    </div>
  );
};

export default FiltrosCard;
