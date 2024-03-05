import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const keypadNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operations = ["+", "-", "*", "/"];

  return (
    <div className="calculator">
      <div className="complete-operation"></div>
      <div className="display"></div>
      <div className="buttons">
        <button>AC</button>
        {keypadNumbers.map((number) => (
          <button key={number}>{number}</button>
        ))}
        {operations.map((operation) => (
          <button key={operation}>{operation}</button>
        ))}
        <button>=</button>
      </div>
    </div>
  );
};

export default Calculator;
