import React, { useContext } from 'react'
import MyContext from './context/MyContext';

const Janta_People = () => {
  const data = useContext(MyContext)
  console.log(" This data is coming from context",data);
  
  return (

    <div>Janta_People
<h1>{data.yojna.money}</h1>
<h1>{data.yojna.penstion}</h1>
<h1>{data.yojna.rashan ?" Rashan milega":"Nhi milega"}</h1>

    </div>
  )
}

export default Janta_People