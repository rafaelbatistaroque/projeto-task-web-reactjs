import React from "react";
import styles from "./QRCodePage.module.css";
import QrCode from "qrcode.react";
import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { LogoutContext } from "../../hooks/LogoutContext";

const QRCodePage = () => {
  const navegarPara = useNavigate();
  const enderecoMacForm = useForm();
  const { ehLogado, setEhLogado } = React.useContext(LogoutContext);

  React.useEffect(() => {
    ehLogado && !enderecoMacForm.valor && enderecoMacForm.setValor(ehLogado);
    ehLogado && enderecoMacForm.valor && navegarPara("/");
  }, [ehLogado]);

  function handleClick() {
    setEhLogado(enderecoMacForm.valor);
  }

  return (
    <section className={`${styles.qrcodepage} container`}>
      <div className={styles.conteudoQr}>
        <h3>Aponte a câmerra do seu celular pelo aplicativo Task</h3>
        <p>Suas tarefas serão sincronizadas com seu celular.</p>
        <QrCode value="obterEnderecoMAC" size={250} />
      </div>
      <div className={styles.validacao}>
        <Input label="Dígite o codigo" nomeInput="endeceroMac" {...enderecoMacForm} />
        <Button tipoButton="button" tituloBotao="Sincronizar" onClick={handleClick} />
      </div>
    </section>
  );
};

export default QRCodePage;
