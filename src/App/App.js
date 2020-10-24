import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Task } from "./Hooks/TaskContext";
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
