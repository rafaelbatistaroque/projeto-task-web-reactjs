import React from "react";
import { ReactComponent as AcademiaIcon } from "../assets/academia.svg";
import { ReactComponent as AniversarioIcon } from "../assets/aniversario.svg";
import { ReactComponent as AutoCenterIcon } from "../assets/auto_center.svg";
import { ReactComponent as CalendarioIcon } from "../assets/calendario.svg";
import { ReactComponent as CompraWebIcon } from "../assets/compra_web.svg";
import { ReactComponent as EsporteIcon } from "../assets/esporte.svg";
import { ReactComponent as EstudarIcon } from "../assets/estudar.svg";
import { ReactComponent as LancheIcon } from "../assets/lanche.svg";
import { ReactComponent as LazerIcon } from "../assets/lazer.svg";
import { ReactComponent as MercadoIcon } from "../assets/mercado.svg";
import { ReactComponent as SalaoIcon } from "../assets/salao.svg";
import { ReactComponent as TrabalhoIcon } from "../assets/trabalho.svg";
import { ReactComponent as ViagemIcon } from "../assets/viagem.svg";
import { ReactComponent as ConcluidaIcon } from "../assets/concluida.svg";
import { ReactComponent as CanceladaIcon } from "../assets/cancelada.svg";

export const IconesTipoTarefa = {
  1: <AcademiaIcon />,
  2: <AniversarioIcon />,
  3: <AutoCenterIcon />,
  4: <CalendarioIcon />,
  5: <CompraWebIcon />,
  6: <EsporteIcon />,
  7: <EstudarIcon />,
  8: <LancheIcon />,
  9: <LazerIcon />,
  10: <MercadoIcon />,
  11: <SalaoIcon />,
  12: <TrabalhoIcon />,
  13: <ViagemIcon />,
};

export const IconesStatusTarefa = {
  true: <ConcluidaIcon />,
  false: <CanceladaIcon />,
};
