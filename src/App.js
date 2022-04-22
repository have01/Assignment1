import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [Num1, setNum1] = useState(null);
  const [Num2, setNum2] = useState(null);
  const [result, setResult] = useState(null);

  function add() {
    setResult(Number(Num1) + Number(Num2));
  }
  function subtract() {
    setResult(Number(Num1) - Number(Num2));
  }
  function Multiply() {
    setResult(Number(Num1) * Number(Num2));
  }
  function Divide() {
    setResult(Number(Num1) / Number(Num2));
  }

  function reset() {
    setResult("");
    setNum1("");
    setNum2("");
  }
  return (
    <>
      <div className="main_container">
        <div className="container">
          <div>
            <input
              value={Num1}
              type="number"
              onChange={(e) => setNum1(e.target.value)}
              placeholder="Enter number one"
            />{" "}
            <br />
            <input
              value={Num2}
              type="number"
              onChange={(e) => setNum2(e.target.value)}
              placeholder="Enter number two"
            />
          </div>
          <div className="btn">
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
            <button onClick={Multiply}>*</button>
            <button onClick={Divide}>/</button>
          </div>

          <div className="result">
            <h1>{result}</h1>
          </div>

          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
