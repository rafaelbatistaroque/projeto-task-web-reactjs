import React from "react";
import styles from "./Checkbox.module.css";

const Checkbox = ({ label, nomeCheckbox, valor, setValor }) => {
  function handleChecked({ target }) {
    setValor(target.checked);
  }

  return (
    <div className={styles.checkboxContainer}>
      <input
        className={styles.checkbox}
        type="checkbox"
        name={nomeCheckbox}
        value="statusTarefa"
        checked={valor}
        data-label={label}
        onChange={handleChecked}
      />
    </div>
  );
};

export default Checkbox;
