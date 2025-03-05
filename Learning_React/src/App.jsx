import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'
import Header from './components/Header'
import { useCallback } from 'react'

function App() {

const [count, setCount] = useState(0)
const newFn =  useCallback(()=>{},[])
  return (
    <>
       <Header newFn = {newFn}/>
    <h1>{count}</h1>

    <button onClick={()=>setCount(prev => prev+1)}>Click Hre</button>
    
    </>
  )
}

export default App
