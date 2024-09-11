import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
export const initialState = {theme: "", data: []}
export const ContextGlobal = createContext();
const fav = JSON.parse(localStorage.getItem("favoritos")) || [];
export const useGlobalContext = () => {
  return useContext(ContextGlobal);
};


export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
 const [detail, setDetail] = useState([]);
 const[favoritos, setFavoritos]= useState()
 const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
/*   const [error, setError] = useState({
    nombre: '',
    telefono: '',
    correo: ''
  });  */

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      setData(res.data);
      console.log(res.data);
    })
  }, []);

 
    const detalle ="https://jsonplaceholder.typicode.com/users/:id";
    axios(detalle).then((res) => {
      setDetail(res.data);
      
    })
  
    useEffect(() => {
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }, [favoritos]);


  return (
    <ContextGlobal.Provider value={{data, setData,detail,setDetail,setEmail,email,nombre,setNombre,tel,setTel, favoritos,setFavoritos}}>
      {children}
    </ContextGlobal.Provider>
  );
  
};
