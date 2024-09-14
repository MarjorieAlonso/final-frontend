//import React from "react";
import { useState } from "react";
import Mensaje from "./Mensaje";

const Form = () => {
  const [usuario, setUsuario] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  
  const [error, setError] = useState(false);
  const [mensajeExito, setMensajeExito] = useState(false);

  const handleChangeName = (e) => setUsuario( e.target.value );
  const handleChangeEmail = (e) => setMail( e.target.value );
  const handleChangePhone = (e) => setPhone( e.target.value );

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const numRegex = /^[0-9]{10}$/;
    const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nombreValido =  usuario.trim().length > 5;
   const telefonoValido = numRegex.test(phone);
   const emailValido = emailRegex.test(mail) 
    if (nombreValido && telefonoValido && emailValido)
       {
      setMensajeExito(true);
      setError(false);
      setTimeout(() => {
        setMensajeExito(false)
        reset()
      }, 3000);
      console.log(usuario)
      console.log(phone)
      console.log(mail)
      
    } else {
      setError(true);
    }
  }

  const reset =()=>{
    setMail("")
    setUsuario("")
    setPhone("")
  }

  return (
    <div className="Form">
      {mensajeExito ? 
        <Mensaje usuario={usuario}></Mensaje>
      : (
        <form onSubmit={handleSubmit}>
        
          <input
            type="text"
            id="name"
            placeholder="Nombre"
            value={usuario}
            onChange={handleChangeName}
          />
         
 
       
          <input
            type="tel"
            id="tel"
            placeholder="telefono ej: 310311111"
            value={phone}
            onChange={handleChangePhone}
            
          />
    

          <input
            type="email"
            id="email"
            placeholder="email ej: fulanito@xxx.com"
            value={mail}
            onChange={handleChangeEmail}
          />
      
          
          <button onSubmit={handleSubmit}>Enviar</button>            
        </form>
      )}

      {error && (<h3>Por favor, complete el formulario correctamente.</h3>)}
    </div>
  );
};

export default Form;

  

 

 



