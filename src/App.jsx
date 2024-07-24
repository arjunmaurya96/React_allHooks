import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './components/UseState'
import UseReducer from './components/useReducer/UseReducer'
import UserMemo from './components/useMemo/UserMemo'
import UseEffectComponent from './components/useEffect/UseEffectComponent'
import UseRefComponent from './components/useRef/UseRefComponent'

function App() {
  return (
    <>
{/* <UseState/> */}
{/* <UseReducer/> */}
{/* <UserMemo/> */}
{/* <UseEffectComponent/> */}
<UseRefComponent/>
   
    
    </>
  )
}

export default App
