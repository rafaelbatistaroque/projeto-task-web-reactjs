import React from "react";

const useLocalStorage = (chave, valorInicial) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(chave);

    return local ? local : valorInicial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(chave, state);
  }, [chave, state]);

  return [state, setState];
};

export default useLocalStorage;
