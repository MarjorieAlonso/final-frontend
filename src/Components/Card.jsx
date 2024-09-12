//import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";



const Card = ({ data }) => {
 const { setFavoritos} = useContextGlobal()
 const addFav = () => {
  setFavoritos((favoritos) => [...favoritos, data]);
};

    return (
      <div className="card">
        <img src="images/doctor.jpg" alt="doctor" width="200px"/>
          
           <h2> Nombre :{name}</h2>
          <h3> Username:{data.username}</h3>
           <h4> Id :{data.id}</h4> 
        {/*   <Link to={"/dentista/"+ data.id}>
          <button>Ver detalle</button></Link> */}
      
  
          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          <button onClick={addFav} className="favButton">Añadir a favoritos</button>
      </div>
    );
  };
  


export default Card;
