import React from 'react';
import Card from "../Components/Card";
import {useGlobalContext}from "../Components/utils/global.context" 


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  //const {data} = useGlobalContext()
//console.log(data)
  return (
    <main className="" >
     <h1>Home</h1>
      <div className="card-grid">
      {/* {data.map((user) => (
  <Card key={user.id}
              name={user.name} 
              username={user.username} 
              id={user.id}/>
  
))} */}
      </div>
    </main>
  )
}

export default Home