export default function CommaHelper(inMemoryFormula, currentTerm) {
  this.inMemoryFormula = inMemoryFormula;
  this.currentTerm = currentTerm;
  const OPERATORS = ["/", "*", "-", "+"];

  this.canConcatenate = (comma) => {
    if (this.inMemoryFormula === null) {
      return true;
    }
    if (this.inMemoryFormula.indexOf(comma) < 0) {
      return true;
    }
    if (this.currentTerm === null) {
      return true;
    }
    if (this.currentTerm.indexOf(comma) < 0) {
      return true;
    }
    return false;
  };

  this.isCommaFirst = (comma) => {
    return this.inMemoryFormula === null && comma === ",";
  };
  
  this.isCommaFirstAfterLastOperator = (comma) => {
    if (this.inMemoryFormula === null) {
      return false;
    }
    let indices = [];
    for (let operator of OPERATORS) {
      let id = this.inMemoryFormula.lastIndexOf(operator);
      if (id > 0) indices.push(id);
    }
    if (indices.length < 1) {
      return false;
    }
    const lastOperatorId = Math.max(indices);
    const sub = this.inMemoryFormula.substring(lastOperatorId + 1);

    return sub === "";
  };
}
