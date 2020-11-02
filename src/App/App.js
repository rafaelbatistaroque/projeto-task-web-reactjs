import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Task } from "./hooks/TaskContext";
import Rotas from "./routes/Rotas";
import {SnackbarProvider} from './hooks/SnackbarContext'

function App() {
  return (
    <>
      <BrowserRouter>
        <Task>
          <SnackbarProvider>
            <Header />
              <Rotas />
            <Footer />
          </SnackbarProvider>
        </Task>
      </BrowserRouter>
    </>
  );
    }

    export default App;
