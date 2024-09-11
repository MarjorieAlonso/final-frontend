iimport React from "react";
import { Link } from "react-router-dom";



const Card = ({ name, username, id }) => {
 
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <img src="images/doctor.jpg" alt="doctor" width="200px"/>
        
         <h2> Nombre :{name }</h2>
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
