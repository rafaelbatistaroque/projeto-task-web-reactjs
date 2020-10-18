import React from "react";
import ListaFiltroCards from "../../Components/ListaFiltroCards/ListaFiltroCards";
import ListaTaskCards from "../../Components/ListaTaskCards/ListaTaskCards";
import styles from "./HomePage.module.css";

const Home = () => {
   return (
     <section className={`${styles.home}`}>
       <ListaFiltroCards />
       <ListaTaskCards />
     </section>
   );
};

export default Home;
