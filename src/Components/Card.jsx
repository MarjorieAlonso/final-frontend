//import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/Context";



const Card = ({ item}) => {
 const { state, dispatch} = useContextGlobal();
 const isFav = state.favs.find((fav)=>fav.id === item.id)
 const addFav = () => {
  dispatch({type:isFav ? "REMOVE_FAV": "ADD_FAV", payload:item});
};

    return (
      <div className="card">
        <img src="images/doctor.jpg" alt="doctor" width="200px"/>
          <h2> Nombre :{item.name}</h2>
          <h3> Username:{item.username}</h3>
           <h4> Id :{item.id}</h4> 
          <Link to={"/dentista/:id"}>
          <button>Ver detalle</button></Link> 
      
  
          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          <button onClick={addFav} className="favButton">Añadir a favoritos</button>
      </div>
    );
  };
  


export default Card;
