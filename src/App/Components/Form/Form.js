import React from "react";
import styles from "./Form.module.css";
import Input from "./Input/Input";
import TextArea from "./TextArea/TextArea";
import { format } from "date-fns";
import Button from "./Button/Button";
import Checkbox from "./Checkbox/Checkbox";
import useForm from "../../hooks/useForm";
import ListaTipoTarefa from "../ListaTipoTarefa/ListaTipoTarefa";
import { CRIAR_TASK } from "../../services/api/api-task";
import { useNavigate } from "react-router-dom";

const Form = () => {
  let idTarefa = false;
  const tipoTarefa = useForm();
  const titulo = useForm();
  const descricao = useForm();
  const data = useForm();
  const status = useForm();
  const navegarPara = useNavigate();

  let hoje = format(new Date(), "yyyy-MM-dd");

  async function tratarAdicionar(e) {
    e.preventDefault();

    let { url, options } = CRIAR_TASK({
      enderecomac: "44:44:44:44:44:44",
      tipo: tipoTarefa.valor,
      titulo: titulo.valor,
      descricao: descricao.valor,
      quando: data.valor,
    });

    const promise = await fetch(url, options);
    const resposta = await promise.json();

    console.log(resposta);
    navegarPara("/");
  }

  return (
    <>
      <ListaTipoTarefa {...tipoTarefa} />
      <form onSubmit={tratarAdicionar} className={`${styles.form} animarFadeInDeCima`}>
        <Input label="Título" nomeInput="titulo" requirido={true} {...titulo} />
        <TextArea
          label="Descrição"
          nomeTextArea="descricao"
          linhas={4}
          quantidadeMaxCaracter={100}
          requirido={true}
          {...descricao}
        />
        <Input nomeInput="data" minParaData={hoje} requirido={true} tipoInput="date" {...data} />
        <div className={styles.buttonsContainer}>
          {idTarefa && <Checkbox label="Concluída" nomeCheckbox="statusTarefa" {...status} />}
          <Button tipoButton="submit" estiloBotao="enfase" tituloBotao="Adicionar" />
          <Button tipoButton="button" tituloBotao="Cancelar" />
        </div>
      </form>
    </>
  );
};

export default Form;
