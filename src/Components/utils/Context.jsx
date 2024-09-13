import { useState, useEffect, useContext } from 'react';
import { createContext } from 'react';
import axios from 'axios';
const ContextGlobal = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favoritos")) || []

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [favoritos, setFavoritos] = useState([lsFavs]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      setData(res.data);
      //console.log(res.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  return (
    <ContextGlobal.Provider value={{ data, favoritos, setFavoritos }}>
      {children} 
    </ContextGlobal.Provider>
  );
};

export default Context;
export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};