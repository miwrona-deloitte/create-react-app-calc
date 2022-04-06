export const trimLeadingZeros = (formula) => {
  if (formula === "0") {
    return formula;
  }
  if (formula.indexOf(",") > 0) {
    return formula;
  }
  const leadingZeros = /^0+|(?<=\+|\-|\*|\/)0+/g;
  return formula.replaceAll(leadingZeros, "0");
};

export const getCurrentDisplay = (digit, currentTerm) => {
  if (currentTerm === null) {
    return digit;
  } else {
    return trimLeadingZeros(currentTerm + digit);
  }
};

export const isOperatorInMemory = (inMemoryFormula, operators) => {
  if (inMemoryFormula === null) {
    return false;
  }
  for (const sign of operators) {
    if (String(inMemoryFormula).indexOf(sign) > 0) {
      return true;
    }
  }
  return false;
};
