import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../components/Form/Form";
import Snackbar from "../components/Notificacao/Snackbar/Snackbar";
import RotaAutenticacao from "../components/RotaAutenticacao/RotaAutenticacao";
import HomePage from "../views/Home/HomePage";
import QRCodePage from "../views/QRCode/QRCodePage";
import TaskDetalhesPage from "../views/TaskDetalhes/TaskDetalhesPage";

const Rotas = () => {
  return (
    <>
      <Snackbar />
      <Routes>
        <RotaAutenticacao exact path="/" element={<HomePage />} />
        <RotaAutenticacao exact path="/task" element={<TaskDetalhesPage />}>
          <Route path="/adicionar" element={<Form />} />
          <Route path="/editar/:index" element={<Form />} />
        </RotaAutenticacao>
        <Route exact path="/sincronizar" element={<QRCodePage />} />
        <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
      </Routes>
    </>
  );
};

export default Rotas;
