import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Task } from "./hooks/TaskContext";
import Rotas from "./routes/Rotas";
import {SnackbarProvider} from './hooks/SnackbarContext'
import { LogoutProvider } from "./hooks/LogoutContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <Task>
          <SnackbarProvider>
            <LogoutProvider>
              <Header />
                <Rotas />
              <Footer />
            </LogoutProvider>
          </SnackbarProvider>
        </Task>
      </BrowserRouter>
    </>
  );
    }

    export default App;
