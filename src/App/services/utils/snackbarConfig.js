export const ENUM_SNACKBAR = {
  TIPO: {
    DEFAULT: 0,
    SUCESSO: 1,
    ERRO: 2,
    INFO: 3,
    AVISO: 4,
  },
  POSICAO: {
    ACIMA_ESQUERDA: 0,
    ACIMA_CENTRO: 1,
    ACIMA_DIREITA: 2,
    ABAIXO_ESQUERDA: 3,
    ABAIXO_CENTRO: 4,
    ABAIXO_DIREITA: 5,
  },
};

export const COR = {
  0: "#303030",
  1: "#32a852",
  2: "#e65757",
  3: "#575FFF",
  4: "#e8c435",
  5: "#fff",
};

export const SNACKBAR_CONFIG_TIPO = {
  0: {
    background: COR[0],
    COR_TEXTO: {
      color: COR[5],
    },
    COR_BOTAO: {
      color: COR[3],
    },
  },
  1: {
    background: COR[1],
    COR_TEXTO: {
      color: COR[5],
    },
    COR_BOTAO: {
      color: COR[0],
    },
  },
  2: {
    background: COR[2],
    COR_TEXTO: {
      color: COR[5],
    },
    COR_BOTAO: {
      color: COR[0],
    },
  },
  3: {
    background: COR[3],
    COR_TEXTO: {
      color: COR[5],
    },
    COR_BOTAO: {
      color: COR[0],
    },
  },
  4: {
    background: COR[4],
    COR_TEXTO: {
      color: COR[0],
    },
    COR_BOTAO: {
      color: COR[0],
    },
  },
};

export const SNACKBAR_CONFIG_POSICAO = {
  0: {
    top: "0",
    left: "0",
  },
  1: {
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
  },
  2: {
    top: "0",
    right: "0",
  },
  3: {
    bottom: "0",
    left: "0",
  },
  4: {
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
  },
  5: {
    bottom: "0",
    right: "0",
  },
};

export const POSICAO_NOMINAL = {
  ABAIXO: "abaixo",
  ACIMA: "acima",
};

/**
 * @param {[string]} mensagem [Mensagem que aparecerá no corpo da snackbar]
 * @param {[Number]} tipo   [0: (Default) Default, 1: Sucesso, 2: Erro, 3: Informação, 4: Alerta]
 * @param {[Number]} posicao   [0: (Default) Acima-Esquerda, 1: Acima-Centro, 2: Acima-Direita, 3: Abaixo-Esquerda, 4: Abaixo-Centro, 5: Abaixo-Direita]
 * @param {[Number]} duracaoSegundos   [Tempo que o snack permanecerá aberto]
 * @param {[string]} textoBotao [Texto da callAction]
 */
export const CRIAR_SNACK = (mensagem, tipo = 0, posicao, duracaoSegundos, textoBotao = false) => {
  return {
    mensagem: mensagem.length === 0 || !mensagem ? "Escreva sua mensagem aqui!" : mensagem,
    tipo: tipo >= 0 && tipo < 5 ? tipo : 0,
    posicao: posicao >= 0 && posicao < 6 ? posicao : 0,
    textoBotao,
    duracaoSegundos: duracaoSegundos < 1 || !duracaoSegundos ? 4 : duracaoSegundos,
  };
};