import React from "react";
import useLocalStorage from "./useLocalStorage";

export const LogoutContext = React.createContext();

export const LogoutProvider = ({ children }) => {
  const [ehLogado, setEhLogado] = useLocalStorage("@task/enderecoMac", "");

  return <LogoutContext.Provider value={{ ehLogado, setEhLogado }}>{children}</LogoutContext.Provider>;
};
