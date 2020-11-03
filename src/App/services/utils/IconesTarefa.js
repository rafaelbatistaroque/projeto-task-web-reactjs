import React from "react";
import { ReactComponent as AcademiaIcon } from "../../assets/academia.svg";
import { ReactComponent as AniversarioIcon } from "../../assets/aniversario.svg";
import { ReactComponent as AutoCenterIcon } from "../../assets/auto_center.svg";
import { ReactComponent as CalendarioIcon } from "../../assets/calendario.svg";
import { ReactComponent as CompraWebIcon } from "../../assets/compra_web.svg";
import { ReactComponent as EsporteIcon } from "../../assets/esporte.svg";
import { ReactComponent as EstudarIcon } from "../../assets/estudar.svg";
import { ReactComponent as LancheIcon } from "../../assets/lanche.svg";
import { ReactComponent as LazerIcon } from "../../assets/lazer.svg";
import { ReactComponent as MercadoIcon } from "../../assets/mercado.svg";
import { ReactComponent as SalaoIcon } from "../../assets/salao.svg";
import { ReactComponent as TrabalhoIcon } from "../../assets/trabalho.svg";
import { ReactComponent as ViagemIcon } from "../../assets/viagem.svg";
import { ReactComponent as ConcluidaIcon } from "../../assets/concluida.svg";
import { ReactComponent as CanceladaIcon } from "../../assets/cancelada.svg";

export const IconesTipoTarefa = [
  null,
  <AcademiaIcon />,
  <AniversarioIcon />,
  <AutoCenterIcon />,
  <CalendarioIcon />,
  <CompraWebIcon />,
  <EsporteIcon />,
  <EstudarIcon />,
  <LancheIcon />,
  <LazerIcon />,
  <MercadoIcon />,
  <SalaoIcon />,
  <TrabalhoIcon />,
  <ViagemIcon />,
];

export const IconesStatusTarefa = {
  true: <ConcluidaIcon />,
  false: <CanceladaIcon />,
};
