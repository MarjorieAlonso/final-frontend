//import React from "react";
import { useState } from "react";



const Form = () => {
  const [nombre, setNombre] = useState("");
const [tel , setTel] = useState("");
 const [email, setEmail] = useState("");
 const [error, setError ]= useState("");//
const onChangeName =(e)=> setNombre(e.target.value);
  //Aqui deberan implementar el form completo con sus validaciones
 const validateForm =()=>{
  let valido = true;
  
  if(!nombre){
    error.nombre = "El nombre es requerido";
    valido = false
  } if(!tel.match((/^[0-9]{10}$/))){
    error.telefono = "el telefono debe tener 10 digitos "
    valido = false;
  }
  if(!email){
    error.correo  ="el correo electronico es requerido"

  }else if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
    error.email =" Correo electronico no valido"
    valido =false 
  } setError(error)
  return valido;
}
 const handleSubmit =(e)=>{
  e.preventDefault();
  if(validateForm()){
    alert("formulario enviado con exito")}
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" id ="name" value={nombre} onChange={onChangeName}/>
     
        <label>Telefono</label>
        <input type="tel"  id="tel" value={tel} onChange={(e)=>setTel(e.target.value)}/>
        
        <label>Correo electronico</label>
        <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
       
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
 };

 


export default Form;
