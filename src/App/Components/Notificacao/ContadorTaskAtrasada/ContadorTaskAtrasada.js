import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ContadorTaskAtrasada.module.css";
import { ReactComponent as NotificacaoIcone } from "../../../assets/notificacao.svg";
import { TaskContext } from "../../../hooks/TaskContext";

const ContadorTaskAtrasada = () => {
  const { tarefasAtrasadas, obterTarefas, obterTarefasAtrasadas } = React.useContext(TaskContext);
  const parametrosAtrasadas = { titulo: "Atrasadas", endPoint: "atrasadas", enderecoMac: "44:44:44:44:44:44" };
  const navegarPara = useNavigate();

  React.useEffect(() => {
    contarTarefasAtrasadas();
  }, []);

  async function handleTarefasAtrasadas() {
    navegarPara("/");
    await obterTarefas(parametrosAtrasadas);
  }

  async function contarTarefasAtrasadas() {
    await obterTarefasAtrasadas(parametrosAtrasadas);
  }

  return (
    <div className={styles.notificacao}>
      {tarefasAtrasadas && tarefasAtrasadas.length ? (
        <span data-notificacao={tarefasAtrasadas.length} onClick={handleTarefasAtrasadas}>
          <NotificacaoIcone />
        </span>
      ) : (
        <span>
          <NotificacaoIcone />
        </span>
      )}
    </div>
  );
};

export default ContadorTaskAtrasada;
