//import React from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
const[favoritos]= useGlobalContext();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favoritos.map(()=>{
          <Card key={id}/>
        })}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
