import Button from "./Button";
import "./VerticalSymbols.css";

const VerticalSymbols = (props) => {
  return (
    <div className="vertical-symbols">
      <Button sign="÷" onButtonClick={props.handleOperator} />
      <Button sign="x" onButtonClick={props.handleOperator} />
      <Button sign="-" onButtonClick={props.handleOperator} />
      <Button sign="+" onButtonClick={props.handleOperator} />
      <Button sign="=" onButtonClick={props.equals} />
    </div>
  );
};

export default VerticalSymbols;
