import React from "react";
import styles from "./Form.module.css";
import Input from "./Input/Input";
import TextArea from "./TextArea/TextArea";
import { format } from "date-fns";
import Button from "./Button/Button";

const Form = () => {
  let hoje = format(new Date(), "yyyy-MM-dd");
  return (
    <div className={`${styles.form} animarFadeInDeCima`}>
      <Input label="Título" nomeInput="titulo" requirido={true} onChange={() => {}} />
      <TextArea label="Descrição" nomeTextArea="descricao" linhas={4} quantidadeMaxCaracter={100} requirido={true} />
      <Input nomeInput="data" minParaData={hoje} value={hoje} requirido={true} tipoInput="date" onChange={() => {}} />
      <Button />
    </div>
  );
};

export default Form;
