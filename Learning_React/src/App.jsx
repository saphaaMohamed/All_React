import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  //  const counter = useState(0) [0]
  //  const setCounter = useState(0) [1]
  //  console.log(counter);
  //  console.log(setCounter);
  // const [color, setcolor] = useState('red')
  // const changeColor = () => {
  //    color = 'blue'
  //    console.log(color);
  //    setcolor('blue');
  // }
  
  // const[brand, setBrand] = useState('Ferrari');
  // const[model, setModel] = useState('Roma');
  // const[year, setYear] = useState(2025);
  // const[color, setColor] = useState('Red');
  // const [car, setCar] = useState({
  //   brand: 'Ferrari',
  //   model: 'Roma',
  //   year: 2025,
  //   color: 'Red'
  // });

  // const changeColor = () => {
  //   setCar((prev)=>{
  //     return {...prev, color: 'Blue'}
  //   })
  // }
  // const [count, setCount] = useState(0);
  // const increaseCount = () => {
    // setCount(count + 1);

    // setCount(count=> count+ 1);
    // setCount(count=> count + 1);
    // setCount(count=> count + 1);
    // setCount(count=> count+ 1);
  // }
  const [count, setCount] = useState(0);
  const [name, setName] = useState('saphaa');
  useEffect(() => {
    setTimeout(() => {
      setCount( count => count + 1);
    }, 2000);
  } ,[count, name]);
  return (
    <>

   {/* <h1>my favourate color is {color}!</h1>
       <button>Blue</button> */}
       {/* <h1>My { car.brand}</h1>
       <h2>It is a{car.color} { car.model} from {car.year}</h2>
       <button onClick={changeColor}>Blue</button> */}
       {/* <h1>Count: {count}</h1>
       <button onClick={increaseCount}> Increase</button> */}
        <h1>I've rendered {count} times!</h1>
       
    </>
  )
}

export default App
