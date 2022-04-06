import Button from "./Button";
import "./VerticalSymbols.scss";

const VerticalSymbols = (props) => {
  const getButtons = () => {
    const operators = ["/", "*", "-", "+"];
    const buttons = [];
    operators.forEach((operator) => {
      buttons.push(
        <Button
          className="vertical-symbols__button-orange vertical-symbols__button--width-normal"
          sign={operator}
          onButtonClick={props.handleOperator}
          key={operator}
        />
      );
    });
    return buttons;
  };
  return (
    <div className="vertical-symbols">
      {getButtons()}
      <Button
        className="vertical-symbols__button-orange vertical-symbols__button--width-normal keyboard--border-bottom-right-radius"
        sign="="
        onButtonClick={props.equals}
      />
    </div>
  );
};

export default VerticalSymbols;
