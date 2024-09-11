//import React from "react";
import { Link } from "react-router-dom";
//import { useGlobalContext } from "./utils/global.context";



const Card = ({ name, username, id }) => {
 //const { setData} = useGlobalContext()
/*  const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    const newFav = { name, username, id };
    if (!favs.find(fav => fav.id === id)) {
      favs.push(newFav);
      localStorage.setItem('favorites', JSON.stringify(favs));
    } */
    return (
      <div className="card">
        <img src="images/doctor.jpg" alt="doctor" width="200px"/>
          
           <h2> Nombre :{name}</h2>
          <h3> Username:{username}</h3>
           <h4> Id :{id}</h4> 
          <Link to={`/dentista/${id}`}>
          <button>Ver detalle</button></Link>
      
  
          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          <button onClick={addFav} className="favButton">Add fav</button>
      </div>
    );
  };
  


export default Card;
