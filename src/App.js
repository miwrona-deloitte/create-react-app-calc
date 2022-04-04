import React from "react";
import { Screen } from "./components/Screen";
import Keyboard from "./components/Keyboard";
import DigitHelper from "./helper/DigitHelper";
import CommaHelper from "./helper/CommaHelper";
import { mapOperator } from "./helper/OperatorHelper";

import "./App.css";
import "./components/Screen.css";
import "./components/Button.css";

function App() {
  const [display, setDisplay] = React.useState(0);
  const [currentTerm, setCurrentTerm] = React.useState(null);
  const [inMemoryFormula, setInMemoryFormula] = React.useState(null);
  const [clearButton, setClearButton] = React.useState("AC");
  const [startNewTerm, setStartNewTerm] = React.useState(0);

  const OPERATORS = ["/", "*", "-", "+"];

  const handleDigit = (e) => {
    const helper = new DigitHelper(inMemoryFormula, currentTerm, OPERATORS);
    setClearButton("C");
    const digit = e.target.value;
    let formula =
      inMemoryFormula === null || startNewTerm
        ? digit
        : inMemoryFormula + digit;
    setStartNewTerm(0);
    formula = helper.trimLeadingZeros(formula);
    setInMemoryFormula(formula);
    const localCurrentDisplay = helper.getCurrentDisplay(digit);
    setCurrentTerm(localCurrentDisplay);
    setDisplay(helper.isOperatorInMemory() ? localCurrentDisplay : formula);
  };

  const handleComma = () => {
    const comma = ".";
    const helper = new CommaHelper(inMemoryFormula, currentTerm, OPERATORS);
    if (helper.canConcatenate(comma)) {
      setInMemoryFormula(inMemoryFormula + comma);
      setCurrentTerm(currentTerm + comma);
      setDisplay(currentTerm + comma);
    }
    if (helper.isCommaFirst(comma)) {
      setInMemoryFormula("0.");
      setCurrentTerm("0.");
      setDisplay("0.");
    }
    if (helper.isCommaFirstAfterLastOperator()) {
      setInMemoryFormula(inMemoryFormula + "0.");
      setCurrentTerm("0.");
      setDisplay("0.");
    }
    setStartNewTerm(0);
  };

  const handleOperator = (event) => {
    let operator = event.target.value;
    setStartNewTerm(0);
    operator = mapOperator(operator);
    if (inMemoryFormula === null && operator === "-") {
      setInMemoryFormula(operator);
      setDisplay(0);
      setCurrentTerm(operator);
      return;
    }
    if (inMemoryFormula === null || inMemoryFormula === "") {
      return;
    }
    let lastSign = inMemoryFormula.slice(-1);
    if (OPERATORS.indexOf(lastSign) < 0) {
      setInMemoryFormula(inMemoryFormula + operator);
      setCurrentTerm(null);
    }
    return;
  };

  const equals = () => {
    if (inMemoryFormula === null) {
      return;
    }
    const helper = new DigitHelper(inMemoryFormula, currentTerm, OPERATORS);
    let result = Function(
      "return " + format(helper.trimLeadingZeros(inMemoryFormula))
    )();
    if (result === "" || result === undefined) {
      result = 0;
    }
    if (result.toString().length > 8) {
      let expResult = Number(result.toExponential(10)).toExponential();
      if (expResult.length > 8) {
        result = expResult;
      } else {
        result = parseFloat(expResult);
      }
    }
    result = String(result);
    setInMemoryFormula(result);
    setDisplay(result);
    setCurrentTerm(null);
    setStartNewTerm(1);
  };

  const format = (formula) => {
    const lastSign = formula.slice(-1);
    let newInMem = formula;
    if (OPERATORS.indexOf(lastSign) >= 0) {
      newInMem = formula.replace(lastSign, "");
    }
    return newInMem;
  };

  const handleClear = (e) => {
    const clearSymbol = e.target.value;
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
  };

  /**
   * from "+" to "-" and inversely
   */
  const reverseSign = () => {
    if (inMemoryFormula === null) {
      return;
    }
    if (startsWithMinus(inMemoryFormula)) {
      const formulaWithoutMinus = inMemoryFormula.replace("-", "");
      setInMemoryFormula(formulaWithoutMinus);
      setDisplay(formulaWithoutMinus);
      return;
    }
    const formulaWithMinus = "-" + inMemoryFormula;
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

  const handlePercent = () => {
    setInMemoryFormula(divideByNumber(inMemoryFormula, 100));
    setDisplay(divideByNumber(display, 100));
    setCurrentTerm(divideByNumber(currentTerm, 100));
  };

  const divideByNumber = (value, number) => {
    return String(Number(value) / number);
  };

  return (
    <div className="calc">
      <Screen displayValue={display} />
      <Keyboard
        currentTerm={currentTerm}
        display={display}
        inMemoryFormula={inMemoryFormula}
        clearButton={clearButton}
        handleClear={handleClear}
        reverseSign={reverseSign}
        handlePercent={handlePercent}
        handleDigit={handleDigit}
        handleComma={handleComma}
        handleOperator={handleOperator}
        equals={equals}
      />
    </div>
  );
}

export default App;
