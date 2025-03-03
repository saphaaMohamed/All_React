import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {

  const[number, setNumber]=useState(0)
  const[counter, setCounter]=useState(0)
  function cubeNUm(num){
    console.log('calculation done!');
    return Math.pow(num, 3)
  }
  const result =  useMemo(() => cubeNUm(number), [number])
  // cubeNUm(number)

  return (
    <>
    <input type="number" value={number} onChange={(e) =>{setNumber (e.target.value)}} />
    <h1>Cube of the number: {result}</h1>
    <button onClick={()=>{setCounter(counter+1)}}>Counter ++</button>
    <h1>Counter: {counter}</h1>
    
    </>
  )
}

export default App
