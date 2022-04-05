import Button from "./Button";
import "./HorizontalSymbols.scss";

const HorizontalSymbols = (props) => {
  return (
    <div className="horizontal-symbols">
      <Button
        onButtonClick={props.handleClear}
        sign={props.clearButton}
        className="horizontal-symbols--button-grey vertical-symbols__button--width-normal "
      />
      <Button
        sign="+/-"
        onButtonClick={props.reverseSign}
        className="horizontal-symbols--button-grey vertical-symbols__button--width-normal "
      />
      <Button
        sign="%"
        onButtonClick={props.handlePercent}
        className="horizontal-symbols--button-grey vertical-symbols__button--width-normal "
      />
    </div>
  );
};

export default HorizontalSymbols;
