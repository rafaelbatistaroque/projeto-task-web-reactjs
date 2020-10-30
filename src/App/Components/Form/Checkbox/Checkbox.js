import React from "react";
import styles from "./Checkbox.module.css";

const Checkbox = ({ label, checked, nomeCheckbox }) => {
  return (
    <div className={styles.checkboxContainer}>
      <input
        checked={checked}
        className={styles.checkbox}
        type="checkbox"
        name={nomeCheckbox}
        value={checked}
        data-label={label}
      />
    </div>
  );
};

export default Checkbox;
