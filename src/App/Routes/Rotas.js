import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../views/Home/HomePage";
import QRCodePage from "../views/QRCode/QRCodePage";
import TaskDetalhesPage from "../views/TaskDetalhes/TaskDetalhesPage";

const Rotas = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/task-detalhes" element={<TaskDetalhesPage />} />
      <Route path="/sincronizar" element={<QRCodePage />} />
    </Routes>
  );
};

export default Rotas;
