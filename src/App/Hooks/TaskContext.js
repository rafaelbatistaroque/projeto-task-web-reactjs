import React from "react";
import { OBTER_TASKS_FILTRO } from "../services/api/api-task";

export const TaskContext = React.createContext();

export const Task = ({ children }) => {
  const [tarefas, setTarefas] = React.useState([]);
  const [tarefasAtrasadas, setTarefasAtrasadas] = React.useState([]);
  const [tituloTipoTarefa, setTitulotipoTarefa] = React.useState("");

  async function obterTarefas({ endPoint, enderecoMac, titulo }) {
    setTarefas([]);

    let resposta = await obterFetch(endPoint, enderecoMac);
    if (resposta.data.length === 0) return setTitulotipoTarefa("Nenhuma tarefa encontrada");

    setTarefas(resposta.data);
    setTitulotipoTarefa(titulo);
  }

  async function obterTarefasAtrasadas({ endPoint, enderecoMac }) {
    let resposta = await obterFetch(endPoint, enderecoMac);

    setTarefasAtrasadas(resposta.data);
  }

  async function obterFetch(endPoint, enderecoMac) {
    let { url, options } = OBTER_TASKS_FILTRO(endPoint, enderecoMac);
    let promise = await fetch(url, options);

    return await promise.json();
  }

  return (
    <TaskContext.Provider value={{ tarefas, tarefasAtrasadas, tituloTipoTarefa, obterTarefas, obterTarefasAtrasadas }}>
      {children}
    </TaskContext.Provider>
  );
};
