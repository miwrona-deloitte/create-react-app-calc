import Button from "./Button";
import "./HorizontalSymbols.scss";

const HorizontalSymbols = (props) => {
  return (
    <div className="horizontal-symbols">
      <Button onButtonClick={props.handleClear} sign={props.clearButton} />
      <Button sign="+/-" onButtonClick={props.reverseSign} />
      <Button sign="%" onButtonClick={props.handlePercent} />
    </div>
  );
};

export default HorizontalSymbols;
