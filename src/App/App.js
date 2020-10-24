import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Task } from "./hooks/TaskContext";
import HomePage from "./views/Home/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Task>
          <Header />
          <HomePage />
          <Footer />
        </Task>
      </BrowserRouter>
    </>
  );
    }

    export default App;
