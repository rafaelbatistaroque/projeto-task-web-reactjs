import React from "react";

const useForm = () => {
  const [valor, setValor] = React.useState("");

  const onChange = ({ target }) => {
    setValor(target.value);
  };

  return {
    valor,
    setValor,
    onChange,
  };
};

export default useForm;
