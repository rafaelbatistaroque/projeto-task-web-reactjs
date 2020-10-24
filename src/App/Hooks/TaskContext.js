import React from "react";
import { OBTER_TASKS_FILTRO } from "../services/api/api-task";

export const TaskContext = React.createContext();

export const Task = ({ children }) => {
  const [tarefas, setTarefas] = React.useState([]);

  async function obterTarefas(endPoint, endereceMac) {
    let { url, options } = OBTER_TASKS_FILTRO(endPoint, endereceMac);
    let promise = await fetch(url, options);
    let resposta = await promise.json();

    setTarefas(resposta.data);
  }

  return <TaskContext.Provider value={{ tarefas, obterTarefas }}>{children}</TaskContext.Provider>;
};
