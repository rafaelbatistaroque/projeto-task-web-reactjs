import React from "react";
import styles from "./FiltroCard.module.css";

const FiltroCard = ({ titulo }) => {
  return <button className={styles.filtroCard} key={titulo} data-filtro={titulo} />;
};

export default FiltroCard;
