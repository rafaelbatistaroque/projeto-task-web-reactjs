import React from "react";
import { OBTER_TASKS_FILTRO } from "../services/api/api-task";
import { LogoutContext } from "./LogoutContext";

export const TaskContext = React.createContext();

export const Task = ({ children }) => {
  const { ehLogado } = React.useContext(LogoutContext);
  const [tarefas, setTarefas] = React.useState([]);
  const [tarefasAtrasadas, setTarefasAtrasadas] = React.useState([]);
  const [tituloTipoTarefa, setTitulotipoTarefa] = React.useState("");

  async function obterTarefas({ endPoint, titulo }) {
    setTarefas([]);

    let resposta = await obterFetch(endPoint, ehLogado);
    if (resposta.existeErro || resposta.data.length === 0) return setTitulotipoTarefa("Nenhuma tarefa encontrada");

    setTarefas(resposta.data);
    setTitulotipoTarefa(titulo);
  }

  async function obterTarefasAtrasadas({ endPoint }) {
    let resposta = ehLogado && (await obterFetch(endPoint, ehLogado));

    setTarefasAtrasadas(resposta.data);
  }

  async function obterFetch(endPoint) {
    let { url, options } = OBTER_TASKS_FILTRO(endPoint, ehLogado);
    let promise = await fetch(url, options);

    return await promise.json();
  }

  return (
    <TaskContext.Provider value={{ tarefas, tarefasAtrasadas, tituloTipoTarefa, obterTarefas, obterTarefasAtrasadas }}>
      {children}
    </TaskContext.Provider>
  );
};
