import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../components/Form/Form";
import HomePage from "../views/Home/HomePage";
import QRCodePage from "../views/QRCode/QRCodePage";
import TaskDetalhesPage from "../views/TaskDetalhes/TaskDetalhesPage";

const Rotas = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/task" element={<TaskDetalhesPage />}>
        <Route path="/adicionar" element={<Form />} />
        <Route path="/editar/:index" element={<Form />} />
      </Route>
      <Route exact path="/sincronizar" element={<QRCodePage />} />
      <Route path="*" element={<h1>Erro 404</h1>} />
    </Routes>
  );
};

export default Rotas;
