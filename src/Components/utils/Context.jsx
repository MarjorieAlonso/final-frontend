import {  useEffect, useContext, useReducer } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import { reducer } from '../../reducers/reducers';

const ContextGlobal = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];
const inicitalState ={
  data:[],
  favs: [lsFavs],
  theme:true,
};
const Context = ({ children }) => {

const [state , dispatch]= useReducer(reducer, inicitalState)
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({type:"GET_DATA", payload:res.data});
      //console.log(res.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children} 
    </ContextGlobal.Provider>
  );
};

export default Context;
export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};