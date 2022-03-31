export default class CommaHelper {
  constructor(inMemoryFormula, currentTerm, operators) {
    this.inMemoryFormula = inMemoryFormula;
    this.currentTerm = currentTerm;
    this.operators = operators;
  }

  canConcatenate = (comma) => {
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

  isCommaFirst = (comma) => {
    return this.inMemoryFormula === null && comma === ",";
  };

  isCommaFirstAfterLastOperator = () => {
    if (this.inMemoryFormula === null) {
      return false;
    }
    let indices = [];
    for (let operator of this.operators) {
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
