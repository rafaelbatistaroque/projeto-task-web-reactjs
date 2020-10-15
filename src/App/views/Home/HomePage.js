import React from "react";
import FiltrosCard from "../../Components/FiltroCard/FiltrosCard";
import styles from "./HomePage.module.css";

const Home = () => {
   return (
     <section className={`${styles.home}`}>
       <FiltrosCard />
     </section>
   );
};

export default Home;
