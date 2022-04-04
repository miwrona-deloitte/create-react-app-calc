import HorizontalSymbols from "./HorizontalSymbols";
import VerticalSymbols from "./VerticalSymbols";
import Digits from "./Digits";

import "./Keyboard.css";
import "./Button.css";

const Keyboard = (props) => {
  return (
    <div className="keyboard">
      <div className="grey-buttons">
        <HorizontalSymbols
          currentTerm={props.currentTerm}
          display={props.display}
          inMemoryFormula={props.inMemoryFormula}
          clearButton={props.clearButton}
          handleClear={props.handleClear}
          reverseSign={props.reverseSign}
          handlePercent={props.handlePercent}
        />
        <Digits
          handleDigit={props.handleDigit}
          handleComma={props.handleComma}
        />
      </div>
      <VerticalSymbols
        handleOperator={props.handleOperator}
        equals={props.equals}
      />
    </div>
  );
};

export default Keyboard;
