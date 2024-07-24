import React, { useReducer } from 'react'

const UseReducer = () => {

  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { counter: state.counter + 1 };
      case "DECREMENT":
        return { counter: state.counter - 1 }
      default:
        return state;

    }

  }

  const [state, dispatch] = useReducer(counterReducer, { counter: 0 })
  return (
    <>

      <div>{state.counter}</div>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>increment</button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>decrement</button>

    </>
  )
}

export default UseReducer