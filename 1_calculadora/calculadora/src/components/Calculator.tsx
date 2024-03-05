import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [pendingOperation, setPendingOperation] = useState<string | null>(null);
  const [pendingValue, setPendingValue] = useState(null);
  const [completeOperation, setCompleteOperation] = useState("");

  const keypadNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operations = ["+ ", "-", "*", "/"];

  const handleClick = (value: string) => {
    setCurrentValue((prevValue) => {
      if (prevValue === "0") return value;
      else return prevValue + value;
    });
    setCompleteOperation((prevOperation) => prevOperation + value);
  };

  const handleOperation = (operation: string) => {
    setCompleteOperation(currentValue + " " + operation);
    setPendingOperation(operation);
    setPendingValue(currentValue as any);
    setCurrentValue("0");
  };

  const handleCalculate = () => {
    if (pendingOperation && pendingValue) {
      let result;

      switch (pendingOperation) {
        case "+ ":
          result = parseFloat(pendingValue) + parseFloat(currentValue);
          break;
        case "-":
          result = parseFloat(pendingValue) - parseFloat(currentValue);
          break;
        case "*":
          result = parseFloat(pendingValue) * parseFloat(currentValue);
          break;
        case "/":
          result = parseFloat(pendingValue) / parseFloat(currentValue);
          break;
        default:
          return;
      }

      setCurrentValue(result.toString());
      setCompleteOperation("");
      setPendingOperation(null);
      setPendingValue(null);
    }
  };

  const handleClear = () => {
    setCurrentValue("0");
    setPendingOperation(null);
    setPendingValue(null);
    setCompleteOperation("");
  };

  return (
    <div className="calculator">
      <div className="complete-operation">{completeOperation}</div>
      <div className="display">{currentValue}</div>
      <div className="buttons">
        <button onClick={handleClear}>AC</button>
        {keypadNumbers.map((number) => (
          <button key={number} onClick={() => handleClick(number)}>
            {number}
          </button>
        ))}
        {operations.map((operation) => (
          <button key={operation} onClick={() => handleOperation(operation)}>
            {operation}
          </button>
        ))}
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
