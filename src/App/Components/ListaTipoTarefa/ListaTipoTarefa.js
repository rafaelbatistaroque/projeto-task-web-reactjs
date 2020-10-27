import React from "react";
import { IconesTipoTarefa } from "../../utils/IconesTarefa";
import styles from "./ListaTipoTarefa.module.css";
import TipoTarefa from "./TipoTarefa/TipoTarefa";

const ListaTipoTarefa = () => {
  return (
    <div className={`${styles.listaTipoTarefa} container animarFadeInDeCima`}>
      {IconesTipoTarefa.map((icone, index) => index > 0 && <TipoTarefa key={index} Icone={icone} tipo={index} />)}
    </div>
  );
};

export default ListaTipoTarefa;
