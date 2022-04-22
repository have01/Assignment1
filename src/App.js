import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {

   const [Num1, setNum1] = useState(0);
   const [Num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
   
  

  function add() {
    setResult(Number(Num1) + Number(Num2));
  }
  function subtract() {
    setResult(Number(Num1) - Number(Num2));
  } function Multiply() {
    setResult(Number(Num1) *Number(Num2));
  } function Divide() {
    setResult(Number(Num1) / Number(Num2));
  }
  
    return (
      <> 
      <div className="main_container">
      <div className="container">
            <div>
              <input type="number" onChange={(e) => setNum1(e.target.value)} /> <br />
              <input type="number" onChange={(e) => setNum2(e.target.value)} />
            </div>
            <div className='btn'>
              <button onClick={add}>+</button>
              <button onClick={subtract}>-</button>
              <button onClick={Multiply}>*</button>
              <button onClick={Divide}>/</button>
            </div>

            <div className='result'> <h1>{result}</h1></div>
          </div>

      </div>
         
      </>
    

    
  )
}

export default App
