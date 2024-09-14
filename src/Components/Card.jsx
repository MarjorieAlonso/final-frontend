///import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/Context";
import { useParams } from 'react-router-dom';



const Card = ({ data}) => {
 const { state, dispatch} = useContextGlobal();
 const params=useParams()
 const isFav = state.favs.find((fav)=>fav.id === data.id)
 const addFav = () => {
  dispatch({type:isFav ? "REMOVE_FAV": "ADD_FAV", payload:data});
};

    return (
      <div className="card">
        <img src="images/doctor.jpg" alt="doctor" width="200px"/>
          <h2> Nombre :{data.name}</h2>
          <h3> Username:{data.username}</h3>
           <h4> Id :{data.id}</h4> 
           <Link to={`/dentista/${params.id}`}>
          <button>Ver detalle</button></Link> 
      
  
          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          <button onClick={addFav} className="favButton">Añadir a favoritos</button>
      </div>
    );
  };
  


export default Card;
