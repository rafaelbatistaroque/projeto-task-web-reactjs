import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, tipoInput = "text", minParaData, nomeInput, value, requirido = false, onChange }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.inputElement}
        type={tipoInput}
        id={nomeInput}
        name={nomeInput}
        min={minParaData}
        value={value}
        onChange={onChange}
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
