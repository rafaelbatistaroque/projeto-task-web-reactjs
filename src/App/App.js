import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomePage from "./views/Home/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
          <HomePage />
          <Footer />
      </BrowserRouter>
    </>
  );
    }

    export default App;
