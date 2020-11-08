import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, tipoInput = "text", minParaData, valor, nomeInput, requirido = false, onChange }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.inputElement}
        type={tipoInput}
        id={nomeInput}
        name={nomeInput}
        value={valor}
        min={minParaData}
        onChange={onChange}
        placeholder=" "
        required={requirido}
      />
      {label && (
        <label className={styles.inputLabel} htmlFor={nomeInput}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
