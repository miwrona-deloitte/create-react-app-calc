export const mapOperator = (operator) => {
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
