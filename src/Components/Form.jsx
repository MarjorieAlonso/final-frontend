//import React from "react";
import { useState } from "react";
import Mensaje from "./Mensaje";

const Form = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    telefono: "",
    email: ""
  });
  
  const [error, setError] = useState(false);
  const [mensajeExito, setMensajeExito] = useState(false);

  const handleChangename = (e) => setUsuario({ ...usuario, nombre: e.target.value });
  const handleChangeTelefono = (e) => setUsuario({ ...usuario, telefono: e.target.value });
  const handleChangeEmail = (e) => setUsuario({ ...usuario, email: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const numRegex = /^[0-9]{10}$/;
    const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nombreValido =  usuario.nombre.trim().length >= 5;
   const telefonoValido = numRegex.test(usuario.telefono);
   const emailValido =emailRegex.test(usuario.email) 
    if (nombreValido && telefonoValido&&emailValido)
       {
      setMensajeExito(true);
      setError(false);
    } else {
      setMensajeExito(false); 
      setError(true);
    }
  };

  return (
    <div>
      {mensajeExito ? (
        <Mensaje usuario={usuario} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre completo</label>
          <input
            type="text"
            id="name"
            value={usuario.nombre}
            onChange={handleChangename}
          />
          {error && !usuario.nombre.trim() && <p>el nombre es obligatorio</p>}
          <label>Teléfono</label>
          <input
            type="tel"
            id="tel"
            value={usuario.telefono}
            onChange={handleChangeTelefono}
          />

          <label>Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={usuario.email}
            onChange={handleChangeEmail}
          />
          
          <button type="submit">Enviar</button>
          
          {error && <p>Por favor, complete el formulario correctamente.</p>}
        </form>
      )}
    </div>
  );
};

export default Form;

  

 

 



