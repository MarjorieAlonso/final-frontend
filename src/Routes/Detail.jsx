/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [show,setShow] = useState(true)
  const params=useParams()
  const [dentist,setDentist]=useState()

 
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url=`https://jsonplaceholder.typicode.com/users/${params.id}`

useEffect(() =>{
  axios(url)
  .then((res) =>{
    setDentist(res.data)
    setTimeout(()=>{
      setShow(false)  
    },1000)
  })
},[]);

  return (
    <>
      {show ? ("Loading...")
    : (
      <div>
        <h1>Detail Dentist {dentist.id} </h1>
        <div className="detailCard">
          <div>
            <h4>Nombre</h4>
            <p>{dentist.name}</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>{dentist.email}</p>
          </div>
          <div>
            <h4>Phone</h4>
            <p>{dentist.phone}</p>
          </div>
          <div>
            <h4>Website</h4>
            <p>{dentist.website}</p>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default Detail