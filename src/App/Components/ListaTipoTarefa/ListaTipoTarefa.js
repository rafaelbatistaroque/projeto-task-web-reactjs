import React from "react";
import { IconesTipoTarefa } from "../../services/utils/IconesTarefa";
import styles from "./ListaTipoTarefa.module.css";
import TipoTarefa from "./TipoTarefa/TipoTarefa";

const ListaTipoTarefa = (tipoTarefa) => {
  return (
    <div className={`${styles.listaTipoTarefa} container animarFadeInDeCima`}>
      {IconesTipoTarefa.map(
        (icone, index) => index > 0 && <TipoTarefa key={index} Icone={icone} tipo={index} {...tipoTarefa} />
      )}
    </div>
  );
};

export default ListaTipoTarefa;
