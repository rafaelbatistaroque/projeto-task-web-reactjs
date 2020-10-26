import React from "react";
import FiltroCard from "./FiltroCard/FiltroCard";
import styles from "./ListaFiltroCards.module.css";

const ListaFiltroCards = () => {
  const filtros = [
    { titulo: "Todas", endPoint: "todas", enderecoMac: "44:44:44:44:44:44" },
    { titulo: "Hoje", endPoint: "hoje", enderecoMac: "44:44:44:44:44:44" },
    { titulo: "Semana", endPoint: "semana", enderecoMac: "44:44:44:44:44:44" },
    { titulo: "Mês", endPoint: "mes", enderecoMac: "44:44:44:44:44:44" },
    { titulo: "Ano", endPoint: "ano", enderecoMac: "44:44:44:44:44:44" },
  ];

  return (
    <div className={`${styles.listaFiltroCards} container`}>
      {filtros.map((filtro, index) => (
        <FiltroCard key={index} {...filtro} />
      ))}
    </div>
  );
};

export default ListaFiltroCards;
