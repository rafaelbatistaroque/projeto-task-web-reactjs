import React from "react";
import styles from "./TextArea.module.css";

const TextArea = ({ label = false, linhas, nomeTextArea, quantidadeMaxCaracter, requirido = false, onChange }) => {
  return (
    <div className={styles.textAreaContainer}>
      <textarea
        className={styles.inputTextArea}
        id={nomeTextArea}
        name={nomeTextArea}
        maxLength={quantidadeMaxCaracter}
        required={requirido}
        rows={linhas}
        onChange={onChange}
      ></textarea>
      <label className={styles.textAreaLabel} htmlFor={nomeTextArea}>
        {label}
      </label>
    </div>
  );
};

export default TextArea;
