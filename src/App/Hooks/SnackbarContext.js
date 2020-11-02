import React from "react";
/**
 * @param {[string]} mensagem [Mensagem que aparecerá no corpo da snackbar]
 * @param {[Number]} tipo   [0: (Default) Default, 1: Sucesso, 2: Erro, 3: Informação, 4: Alerta]
 * @param {[Number]} posicao   [0: (Default) Acima-Esquerda, 1: Acima-Centro, 2: Acima-Direita, 3: Abaixo-Esquerda, 4: Abaixo-Centro, 5: Abaixo-Direita]
 * @param {[Number]} duracaoSegundos   [Tempo que o snack permanecerá aberto]
 * @param {[string]} textoBotao [Texto da callAction]
 */
export const CRIAR_SNACKBAR = (mensagem = false, tipo = 0, posicao = 0, duracaoSegundos = 4, textoBotao = false) => {
  return {
    mensagem,
    tipo,
    posicao,
    textoBotao,
    duracaoSegundos,
  };
};

export const SnackbarContext = React.createContext();

export const SnackbarProvider = ({ children }) => {
  const [abrirSnackbar, setAbrirSnackbar] = React.useState(false);
  const [snackBarFactory, setSnackBarFactory] = React.useState({});

  return (
    <SnackbarContext.Provider value={{ abrirSnackbar, setAbrirSnackbar, snackBarFactory, setSnackBarFactory }}>
      {children}
    </SnackbarContext.Provider>
  );
};
