import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './components/UseState'
import UseReducer from './components/useReducer/UseReducer'
import UserMemo from './components/useMemo/UserMemo'
import UseEffectComponent from './components/useEffect/UseEffectComponent'
import UseRefComponent from './components/useRef/UseRefComponent'
import IndianGovernment from './components/useContext/IndianGovernment'
import MoneyState from './components/useContext/context/MoneyState'
import Janta_People from './components/useContext/Janta_People'
import UseLayOutComponent from './components/useLayOutEffect/UseLayOutComponent'


function App() {
  return (
    <>
    <MoneyState>
{/* <UseState/> */}
{/* <UseReducer/> */}
{/* <UserMemo/> */}
{/* <UseEffectComponent/> */}
{/* <UseRefComponent/> */}
   
    {/* <IndianGovernment/> */}
    {/* <Janta_People/> */}
    <UseLayOutComponent/>
    </MoneyState>

    </>
  )
}

export default App
