import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Task } from "./hooks/TaskContext";
import Rotas from "./routes/Rotas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Task>
          <Header />
          <Rotas />
          <Footer />
        </Task>
      </BrowserRouter>
    </>
  );
    }

    export default App;
