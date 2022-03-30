const OperatorHelper = (inMemoryFormula, currentTerm) => {
  this.inMemoryFormula = inMemoryFormula;
  this.currentTerm = currentTerm;

  this.mapOperator = (operator) => {
    switch (operator) {
      case "÷":
        operator = "/";
        break;
      case "x":
        operator = "*";
        break;
    }
    return operator;
  };
};

export default OperatorHelper;
