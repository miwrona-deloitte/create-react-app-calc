export const canConcatenate = (comma, inMemoryFormula, currentTerm) => {
  if (inMemoryFormula === null) {
    return true;
  }
  if (inMemoryFormula.indexOf(comma) < 0) {
    return true;
  }
  if (currentTerm === null) {
    return true;
  }
  if (currentTerm.indexOf(comma) < 0) {
    return true;
  }
  return false;
};

export const isCommaFirst = (comma, inMemoryFormula) => {
  return inMemoryFormula === null && comma === ".";
};

export const isCommaFirstAfterLastOperator = (inMemoryFormula, operators) => {
  if (inMemoryFormula === null) {
    return false;
  }
  const indices = [];
  for (const operator of operators) {
    let id = inMemoryFormula.lastIndexOf(operator);
    if (id > 0) indices.push(id);
  }
  if (indices.length < 1) {
    return false;
  }
  const lastOperatorId = Math.max(indices);
  const sub = inMemoryFormula.substring(lastOperatorId + 1);

  return sub === "";
};
