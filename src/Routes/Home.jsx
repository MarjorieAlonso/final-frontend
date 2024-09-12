//import React from 'react'
//import { useContext } from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {data} = useContextGlobal();
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {data.map(()=>{
          <Card  key={data.id}
          name={data.name}
          username={data.username}
          id={data.id} 
          data={data}/>
        })} 
       
      </div>
    </main>
  )
}

export default Home