//import React from 'react'
//import { useContext } from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContextGlobal();
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      {state.map((item) => (
          <Card 
            key={item.id}
            name={item.name}
            username={item.username}
            id={item.id}
            data={item} 
          />
        ))}
       
      </div>
    </main>
  )
}

export default Home