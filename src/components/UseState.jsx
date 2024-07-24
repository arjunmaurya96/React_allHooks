import React, { useState } from 'react'

const UseState = () => {
  
  const [count, setCount] = useState(0)

  return (
<>
<div>Number: {count}</div>
<button onClick={()=>setCount(count+1)}>Increment</button>
<button onClick={()=>setCount(count-1)}>Decrement</button>


</>
  )
}

export default UseState