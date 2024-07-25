import React, { useRef } from 'react'

const UseRefComponent = () => {

    const myRef = useRef(null);
    // console.log(myRef);

    const focusInput =()=>{
        myRef.current.focus();
    }

  return (
 <>
 
 <input ref={myRef} type="text" />

 <button onClick={focusInput}>focus</button> 
 
 </>
  )
}

export default UseRefComponent