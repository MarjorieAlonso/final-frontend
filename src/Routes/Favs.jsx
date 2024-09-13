//import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
const{state}= useContextGlobal();
  return (
    <>
      <h1>Dentistas favoritos </h1>
      <div className="card-grid">
        {state.map((item)=>(<Card key={item.id} data={item}/>)
          
        )}
       
      </div>
    </>
  );
};

export default Favs;
