export default function DigitHelper(inMemoryFormula, currentTerm) {
  this.inMemoryFormula = inMemoryFormula;
  this.currentTerm = currentTerm;
  const OPERATORS = ["/", "*", "-", "+"];

  this.getCurrentDisplay = (digit) => {
    if (this.currentTerm === null) {
      return digit;
    } else {
      return this.currentTerm + digit;
    }
  };

  this.isOperatorInMemory = () => {
    if (this.inMemoryFormula === null) {
      return false;
    }
    for (let sign of OPERATORS) {
      if (String(this.inMemoryFormula).indexOf(sign) > 0) {
        return true;
      }
    }
    return false;
  };

  this.trimLeadingZeros = (formula) => {
    if (formula === "0") { 
      return formula;
    }
    const leadingZeros = /^0/g;
    return formula.replaceAll(leadingZeros, "");
  };
}
