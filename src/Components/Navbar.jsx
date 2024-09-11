import React ,{useState} from 'react'
import { Link } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
   const [theme, setTheme]= useState('ligth')
  const cambiarTema =()=>{
    setTheme(theme === 'light'? 'dark':'light')
  } 

  return (
    <nav>
  
          <Link to="/">Home</Link>
          {/*  //<Link to="/detalle">Detalle</Link> */}
            <Link to="/contact">Contact</Link>
           
          
  
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={cambiarTema} >Change theme</button>
    </nav>
  )
}

export default Navbar