import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/Context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, dispatch}=useContextGlobal();
  const cambiarTema =()=>{
    dispatch({type: "CAMBIAR_TEMA"})
  };
 

  return (
    <nav>
  
          <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to = "/fav">Favoritos</Link>
           
          
  
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button  className="button"onClick={cambiarTema} >Cambiar tema a {state.isDarkMode ?'claro':'oscuro'}</button>
    </nav>
  )
}

export default Navbar