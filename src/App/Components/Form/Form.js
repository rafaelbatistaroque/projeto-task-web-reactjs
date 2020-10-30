import React from "react";
import styles from "./Form.module.css";
import Input from "./Input/Input";
import TextArea from "./TextArea/TextArea";
import { format } from "date-fns";
import Button from "./Button/Button";
import Checkbox from "./Checkbox/Checkbox";

const Form = () => {
  let hoje = format(new Date(), "yyyy-MM-dd");

  function tratarAdicionar(e) {
    e.preventDefault();
    console.log("tarefa adicionada");
  }

  return (
    <form onSubmit={tratarAdicionar} className={`${styles.form} animarFadeInDeCima`}>
      <Input label="Título" nomeInput="titulo" requirido={true} onChange={() => {}} />
      <TextArea label="Descrição" nomeTextArea="descricao" linhas={4} quantidadeMaxCaracter={100} requirido={true} />
      <Input nomeInput="data" minParaData={hoje} value={hoje} requirido={true} tipoInput="date" onChange={() => {}} />
      <div className={styles.buttonsContainer}>
        <Checkbox label="Concluída" nomeCheckbox="statusTarefa" />
        <Button tipoButton="submit" estiloBotao="enfase" tituloBotao="Adicionar" />
        <Button tipoButton="submit" tituloBotao="Cancelar" />
      </div>
    </form>
  );
};

export default Form;
