//import React from 'react'
import {useGlobalContext} from "../Components/utils/global.context"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 const{detail} = useGlobalContext()

 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detalle de dentistas</h1>
      <h2>{detail.name}</h2>
      <p>{detail.email}</p>
      <p>{detail.phone}</p>
      <p>{detail.website}</p>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail