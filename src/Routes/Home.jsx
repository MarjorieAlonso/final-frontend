//import React from 'react'
//import { useContext } from 'react'
import Card from '../Components/Card'
import { useGlobalContext } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {data} = useGlobalContext();
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {data.map(()=>{
          <Card  key={data.id}
          name={data.name}
          username={data.username}
          id={data.id}/>
        })} 
       
      </div>
    </main>
  )
}

export default Home