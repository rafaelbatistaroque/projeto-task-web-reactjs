import React from "react";
import styles from "./Form.module.css";
import Input from "./Input/Input";
import TextArea from "./TextArea/TextArea";
import { format } from "date-fns";
import Button from "./Button/Button";
import Checkbox from "./Checkbox/Checkbox";
import useForm from "../../hooks/useForm";
import ListaTipoTarefa from "../ListaTipoTarefa/ListaTipoTarefa";
import { ATUALIZAR_TASK, CRIAR_TASK } from "../../services/api/api-task";
import { useNavigate, useParams } from "react-router-dom";
import { TaskContext } from "../../hooks/TaskContext";

const Form = () => {
  const navegarPara = useNavigate();
  const { tarefas } = React.useContext(TaskContext);
  const { index } = useParams();

  React.useEffect(() => {
    if (index) preencherFormularioParaEdicao({ ...tarefas[index] });
    else limparCamposFormulario();
  }, [index, tarefas]);

  const [idTarefa, setIdTarefa] = React.useState(null);
  const tipoTarefaForm = useForm();
  const tituloForm = useForm();
  const descricaoForm = useForm();
  const dataForm = useForm();
  const statusForm = useForm();

  let hoje = format(new Date(), "yyyy-MM-dd");

  async function tratarAdicionar(e) {
    e.preventDefault();

    let { url, options } = CRIAR_TASK({
      enderecomac: "44:44:44:44:44:44",
      tipo: tipoTarefaForm.valor,
      titulo: tituloForm.valor,
      descricao: descricaoForm.valor,
      quando: dataForm.valor,
    });

    const promise = await fetch(url, options);
    const resposta = await promise.json();

    console.log(resposta); //TODO:Criar notificaçõa de sucesso.
    navegarPara("/");
  }

  async function tratarAtualizar(e) {
    e.preventDefault();

    let { url, options } = ATUALIZAR_TASK(
      {
        enderecomac: "44:44:44:44:44:44",
        tipo: tipoTarefaForm.valor,
        titulo: tituloForm.valor,
        descricao: descricaoForm.valor,
        quando: dataForm.valor,
      },
      idTarefa
    );

    const promise = await fetch(url, options);
    const resposta = await promise.json();

    console.log(resposta); //TODO:Criar notificaçõa de sucesso.
    navegarPara("/");
  }

  function preencherFormularioParaEdicao(tarefa) {
    if (Object.keys(tarefa).length === 0) return navegarPara("/");

    let { _id, titulo, descricao, feito, quando, tipo } = tarefa;

    setIdTarefa(_id);
    tipoTarefaForm.setValor(tipo);
    tituloForm.setValor(titulo);
    descricaoForm.setValor(descricao);
    dataForm.setValor(format(new Date(quando).setHours(+24), "yyyy-MM-dd"));
    statusForm.setValor(feito);
  }

  function limparCamposFormulario() {
    tipoTarefaForm.setValor("");
    tituloForm.setValor("");
    descricaoForm.setValor("");
    dataForm.setValor("");
    statusForm.setValor(false);
  }

  return (
    <>
      <ListaTipoTarefa {...tipoTarefaForm} />
      <form onSubmit={(index && tratarAtualizar) || tratarAdicionar} className={`${styles.form} animarFadeInDeCima`}>
        <h3>{(index && "Editar") || "Nova"}</h3>
        <Input label="Título" nomeInput="titulo" requirido={true} {...tituloForm} />
        <TextArea
          label="Descrição"
          nomeTextArea="descricao"
          linhas={4}
          quantidadeMaxCaracter={100}
          requirido={true}
          {...descricaoForm}
        />
        <Input nomeInput="data" minParaData={hoje} requirido={true} tipoInput="date" {...dataForm} />
        <div className={styles.buttonsContainer}>
          {index && <Checkbox label="Concluída" nomeCheckbox="statusTarefa" {...statusForm} />}
          <Button tipoButton="submit" estiloBotao="enfase" tituloBotao="Adicionar" />
          <Button tipoButton="button" tituloBotao="Cancelar" />
        </div>
      </form>
    </>
  );
};

export default Form;
