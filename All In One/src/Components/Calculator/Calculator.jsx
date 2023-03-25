/* eslint no-eval: 0 */
import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function handleInput(value) {
    setInput(input + value);
  }
  function clear() {
    setInput("");
    setResult("");
  }

  return (
    <div className="CalculatorApp">
      <div className="calculator">
        <div className="displayC">
          <div className="content">
            <h2> CALCULATOR </h2>
            <input type="text" className="input" value={input} readOnly />
            <input type="text" className="output" value={result} readOnly />
          </div>
        </div>
        <div className="keys">
          <button className="key" onClick={() => handleInput("1")}>
            <span>1</span>
          </button>
          <button className="key" onClick={() => handleInput("2")}>
            <span>2</span>
          </button>
          <button className="key" onClick={() => handleInput("3")}>
            <span>3</span>
          </button>
          <button className="key" onClick={() => handleInput("+")}>
            <span>+</span>
          </button>
          {/* <br /> */}
          <button className="key" onClick={() => handleInput("4")}>
            <span>4</span>
          </button>
          <button className="key" onClick={() => handleInput("5")}>
            <span>5</span>
          </button>
          <button className="key" onClick={() => handleInput("6")}>
            <span>6</span>
          </button>
          <button className="key" onClick={() => handleInput("-")}>
            <span>-</span>
          </button>
          {/* <br /> */}
          <button className="key" onClick={() => handleInput("7")}>
            <span>7</span>
          </button>
          <button className="key" onClick={() => handleInput("8")}>
            <span>8</span>
          </button>
          <button className="key" onClick={() => handleInput("9")}>
            <span>9</span>
          </button>
          <button className="key" onClick={() => handleInput("*")}>
            <span>*</span>
          </button>
          {/* <br /> */}
          <button className="key" onClick={() => clear()}>
            <span>AC</span>
          </button>
          <button className="key" onClick={() => handleInput("0")}>
            <span>0</span>
          </button>
          <button className="key" onClick={() => setResult(eval(input))}>
            <span>=</span>
          </button>
          <button className="key" onClick={() => handleInput("/")}>
            <span>/</span>
          </button>
          {/* <br /> */}
        </div>
      </div>
    </div>
  );
}
export default Calculator;
