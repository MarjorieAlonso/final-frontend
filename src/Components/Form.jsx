iimport React from "react";
import { useGlobalContext } from "./utils/global.context";


const Form = () => {
const {nombre, setNombre,tel , setTel ,email, setEmail,error, setError }= useGlobalContext();
const onChangeName =(e)=> setNombre(e.target.value);
  //Aqui deberan implementar el form completo con sus validaciones
 const validateForm =()=>{
  let valido = true;
  const newErrors = {};
  if(!nombre){
    newErrors.nombre = "El nombre es requerido";
    valido = false
  } if(!tel.match((/^[0-9]{10}$/))){
    newErrors.telefono = "el telefono debe tener 10 digitos "
    valido = false;
  }
  if(!email){
    newErrors.correo  ="el correo electronico es requerido"

  }else if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
    newErrors.email =" Correo electronico no valido"
    valido =false 
  } setError(newErrors)
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
        {error.nombre && <p>{error.nombre}</p>}
        <label>Telefono</label>
        <input type="tel"  id="tel" value={tel} onChange={(e)=>setTel(e.target.value)}/>
        {error.telefono && <p>{error.telefono}</p>}
        <label>Correo electronico</label>
        <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        {error.email && <p>{error.email}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
 };

 


export default Form;
