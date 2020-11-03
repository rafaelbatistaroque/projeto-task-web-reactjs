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
import { ENUM_SNACKBAR, CRIAR_SNACK } from "../../services/utils/snackbarConfig";
import { SnackbarContext } from "../../hooks/SnackbarContext";

const Form = () => {
  const navegarPara = useNavigate();
  const { tarefas } = React.useContext(TaskContext);
  const { setSnackBarFactory } = React.useContext(SnackbarContext);
  const [idTarefa, setIdTarefa] = React.useState(null);
  const { index } = useParams();
  const tipoTarefaForm = useForm();
  const tituloForm = useForm();
  const descricaoForm = useForm();
  const dataForm = useForm();
  const statusForm = useForm();
  let hoje = format(new Date(), "yyyy-MM-dd");

  React.useEffect(() => {
    if (index) preencherFormularioParaEdicao({ ...tarefas[index] });
    else limparCamposFormulario();
  }, [index, tarefas]);

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

    if (resposta.existeErro) {
      return resposta.erros.forEach((erro) => exibirMensagemSnackbar(erro.mensagem, ENUM_SNACKBAR.TIPO.ERRO));
    }

    exibirMensagemSnackbar(resposta.data, ENUM_SNACKBAR.TIPO.SUCESSO);
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

    if (resposta.existeErro) {
      return resposta.erros.forEach((erro) => exibirMensagemSnackbar(erro.mensagem, ENUM_SNACKBAR.TIPO.ERRO));
    }
    exibirMensagemSnackbar(`Tarefa atualizada com sucesso`, ENUM_SNACKBAR.TIPO.SUCESSO);
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

  function exibirMensagemSnackbar(mensagem, tipo) {
    const snack = CRIAR_SNACK(mensagem, tipo, ENUM_SNACKBAR.POSICAO.ACIMA_DIREITA);
    setSnackBarFactory(snack);
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
          <Button
            tipoButton="button"
            tituloBotao="Cancelar"
            onClick={() => exibirMensagemSnackbar("Teste de mensagem", 5)}
          />
        </div>
      </form>
    </>
  );
};

export default Form;
