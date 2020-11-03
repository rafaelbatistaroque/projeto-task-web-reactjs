import React from "react";
import { SnackbarContext } from "../../../hooks/SnackbarContext";
import { POSICAO_NOMINAL, SNACKBAR_CONFIG_POSICAO, SNACKBAR_CONFIG_TIPO } from "../../../services/utils/snackbarConfig";
import styles from "./Snackbar.module.css";

const Snackbar = () => {
  const { abrirSnackbar, setAbrirSnackbar, snackBarFactory } = React.useContext(SnackbarContext);
  const [mensagemSnack, setMensagemSnack] = React.useState("");
  const [textCallAction, setTextCallAction] = React.useState("");
  const [posicao, setPosicao] = React.useState(0);
  const [tipo, setTipo] = React.useState(0);

  React.useEffect(() => {
    if (Object.keys(snackBarFactory).length === 0) return;

    montarSnackbar(snackBarFactory);

    setAbrirSnackbar(true);
    debounce(snackBarFactory);
  }, [snackBarFactory]);

  function debounce({ duracaoSegundos }) {
    let tempo;
    if (tempo) clearTimeout(tempo);

    tempo = setTimeout(() => {
      setAbrirSnackbar(false);
      tempo = null;
    }, duracaoSegundos * 1000);
  }

  function montarSnackbar({ mensagem, textoBotao, posicao, tipo }) {
    setMensagemSnack(mensagem);
    setTextCallAction(textoBotao);
    setPosicao(posicao);
    setTipo(tipo);
  }

  function obterPosicaoNominalParaAnimacao() {
    return posicao >= 3 && posicao < 6 ? POSICAO_NOMINAL.ABAIXO : POSICAO_NOMINAL.ACIMA;
  }

  return (
    <>
      {abrirSnackbar && (
        <div className={styles.snackbarContainer} style={{ ...SNACKBAR_CONFIG_POSICAO[posicao] }}>
          <div
            style={{ ...SNACKBAR_CONFIG_TIPO[tipo] }}
            className={styles.snackbar}
            posicao-nominal={obterPosicaoNominalParaAnimacao()}
          >
            <span style={{ ...SNACKBAR_CONFIG_TIPO[tipo].COR_TEXTO }}>{mensagemSnack}</span>
            {textCallAction && (
              <button type="button" style={{ ...SNACKBAR_CONFIG_TIPO[tipo].COR_BOTAO }} className={styles.callAction}>
                {textCallAction}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Snackbar;
