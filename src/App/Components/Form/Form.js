import React from "react";
import styles from "./Form.module.css";
import Input from "./Input/Input";
import TextArea from "./TextArea/TextArea";
import { format } from "date-fns";
import Button from "./Button/Button";
import Checkbox from "./Checkbox/Checkbox";
import useForm from "../../hooks/useForm";
import ListaTipoTarefa from "../ListaTipoTarefa/ListaTipoTarefa";

const Form = () => {
  const tipoTarefa = useForm();
  const titulo = useForm();
  const descricao = useForm();
  const data = useForm();
  const status = useForm();
  let hoje = format(new Date(), "yyyy-MM-dd");

  function tratarAdicionar(e) {
    e.preventDefault();
    console.log("tarefa adicionada");
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
          <Checkbox label="Concluída" nomeCheckbox="statusTarefa" {...status} />
          <Button tipoButton="submit" estiloBotao="enfase" tituloBotao="Adicionar" />
          <Button tipoButton="button" tituloBotao="Cancelar" />
        </div>
      </form>
    </>
  );
};

export default Form;
