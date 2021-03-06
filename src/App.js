import "./App.css";
import React from "react";
import Button from "./components/Button";
import Digits from "./components/Digits";
import DigitHelper from "./components/DigitHelper";
import CommaHelper from "./components/CommaHelper";

function App() {
  const [display, setDisplay] = React.useState(0);
  const [currentTerm, setCurrentTerm] = React.useState(null);
  const [inMemoryFormula, setInMemoryFormula] = React.useState(null);
  const [clearButton, setClearButton] = React.useState("AC");
  const [startNewTerm, setStartNewTerm] = React.useState(0);
  const OPERATORS = ["/", "*", "-", "+"];
  const [displayFont, setDisplayFont] = React.useState("regular-font");

  const handleDigit = (e) => {
    let helper = new DigitHelper(inMemoryFormula, currentTerm);
    setClearButton("C");
    let digit = e.target.value;
    const formula =
      inMemoryFormula === null || startNewTerm
        ? digit
        : inMemoryFormula + digit;
    setStartNewTerm(0);
    setInMemoryFormula(formula);
    let localCurrentDisplay = helper.getCurrentDisplay(digit);
    setCurrentTerm(localCurrentDisplay);
    setDisplay(helper.isOperatorInMemory() ? localCurrentDisplay : formula);
  };

  const handleComma = (e) => {
    let comma = e.target.value;
    let helper = new CommaHelper(inMemoryFormula, currentTerm);
    if (helper.canConcatenate(comma)) {
      setInMemoryFormula(inMemoryFormula + comma);
      setCurrentTerm(currentTerm + comma);
      setDisplay(currentTerm + comma);
    }
    if (helper.isCommaFirst(comma)) {
      setInMemoryFormula("0,");
      setDisplay("0,");
    }
    if (helper.isCommaFirstAfterLastOperator(comma)) {
      setInMemoryFormula(inMemoryFormula + "0,");
      setCurrentTerm("0,");
      setDisplay("0,");
    }
    setStartNewTerm(0);
  };

  const handleOperator = (event) => {
    setStartNewTerm(0);
    let operator = event.target.value;
    switch (operator) {
      case "÷":
        operator = "/";
        break;
      case "x":
        operator = "*";
        break;
    }
    let lastSign = inMemoryFormula.slice(-1);
    if (OPERATORS.indexOf(lastSign) < 0) {
      setInMemoryFormula(inMemoryFormula + operator);
      setCurrentTerm(null);
    }
  };

  const equals = () => {
    if (inMemoryFormula === null) {
      return;
    }
    let result = Function("return " + format(inMemoryFormula))();
    if (result.toString().length > 8) {
      let expResult = Number(result.toExponential(10)).toExponential();
      if (expResult.length > 8) {
        result = expResult;
        //change css font size
        setDisplayFont("small-font");
      } else {
        result = parseFloat(expResult);
      }
    }
    result = String(result).replace(".", ",");
    setInMemoryFormula(result);
    setDisplay(result);
    setStartNewTerm(1);
  };

  const format = (formula) => {
    let newInMem = inMemoryFormula.replaceAll(",", ".");
    let lastSign = inMemoryFormula.slice(-1);
    if (OPERATORS.indexOf(lastSign) >= 0) {
      newInMem = inMemoryFormula.replace(lastSign, "");
    }
    return newInMem;
  };

  const handleClear = (e) => {
    let clearSymbol = e.target.value;
    if (clearSymbol === "AC") {
      setInMemoryFormula(null);
    }
    if (clearSymbol === "C") {
      setClearButton("AC");
      let newInMem = inMemoryFormula.replace(currentTerm, "");
      let lastSign = newInMem.slice(-1);
      for (let sign of OPERATORS) {
        if (OPERATORS.indexOf(lastSign) >= 0) {
          newInMem = newInMem.replace(sign, "");
        }
      }
      setInMemoryFormula(newInMem);
      setStartNewTerm(1);
    }
    setDisplay("0");
    setCurrentTerm(null);
    setDisplayFont("regular-font");
  };

  /**
   * from "+" to "-" and inversely
   */
  const reverseSign = () => {
    if (inMemoryFormula === null) {
      return;
    }
    if (startsWithMinus(inMemoryFormula)) {
      let formulaWithoutMinus = inMemoryFormula.replace("-", "");
      setInMemoryFormula(formulaWithoutMinus);
      setDisplay(formulaWithoutMinus);
      return;
    }
    let formulaWithMinus = "-" + inMemoryFormula;
    setInMemoryFormula(formulaWithMinus);
    setDisplay(formulaWithMinus);
    return;
  };

  const startsWithMinus = () => {
    if (inMemoryFormula.indexOf("-") === 0) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className="screen">
        <p className={"display " + displayFont}>{display}</p>
      </div>
      <div className="keyboard">
        <div className="grey-buttons">
          <div className="horizontal-symbols">
            <Button onButtonClick={handleClear} sign={clearButton} />
            <Button sign="+/-" onButtonClick={reverseSign} />
            <Button sign="%" />
          </div>
          <Digits handleDigit={handleDigit} handleComma={handleComma} />
        </div>
        <div className="vertical-symbols">
          <Button sign="÷" onButtonClick={handleOperator} />
          <Button sign="x" onButtonClick={handleOperator} />
          <Button sign="-" onButtonClick={handleOperator} />
          <Button sign="+" onButtonClick={handleOperator} />
          <Button sign="=" onButtonClick={equals} />
        </div>
      </div>
    </>
  );
}

export default App;
