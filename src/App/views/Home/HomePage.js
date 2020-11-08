import React from "react";
import ListaFiltroCards from "../../components/ListaFiltroCards/ListaFiltroCards";
import ListaTaskCards from "../../components/ListaTaskCards/ListaTaskCards";
import styles from "./HomePage.module.css";

const Home = () => {
   return (
     <section className={`${styles.home} container`}>
       <ListaFiltroCards />
       <ListaTaskCards />
     </section>
   );
};

export default Home;
