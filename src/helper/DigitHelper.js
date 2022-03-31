export default class DigitHelper {
  constructor(inMemoryFormula, currentTerm, operators) {
    this.inMemoryFormula = inMemoryFormula;
    this.currentTerm = currentTerm;
    this.operators = operators;
  }
  getCurrentDisplay = (digit) => {
    if (this.currentTerm === null) {
      return digit;
    } else {
      return this.trimLeadingZeros(this.currentTerm + digit);
    }
  };

  isOperatorInMemory = () => {
    if (this.inMemoryFormula === null) {
      return false;
    }
    for (let sign of this.operators) {
      if (String(this.inMemoryFormula).indexOf(sign) > 0) {
        return true;
      }
    }
    return false;
  };

  trimLeadingZeros = (formula) => {
    if (formula === "0") {
      return formula;
    }
    if (formula.indexOf(",") > 0) {
      return formula;
    }
    const leadingZeros = /^0+|(?<=\+|\-|\*|\/)0+/g;
    return formula.replaceAll(leadingZeros, "0");
  };
}
