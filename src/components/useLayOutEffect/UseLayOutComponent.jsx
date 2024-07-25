import React, { useEffect, useLayoutEffect, useState } from 'react'

const UseLayOutComponent = () => {
    const [bgColor, setBgColor] = useState("green")




    useEffect(()=>{

        console.log("UseEffect is running....! ");

    },[])

    useLayoutEffect(()=>{
        console.log("UseLayoutEffect is running ");
document.body.style.backgroundColor = bgColor;
    },[bgColor])


  return (
    <div>UseLayOutComponent
        <button onClick={()=>setBgColor("red")}> red  color </button>
    </div>
  )
}

export default UseLayOutComponent