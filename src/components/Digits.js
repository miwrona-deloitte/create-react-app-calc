import Button from "./Button";
import "./Digits.scss";
const Digits = ({ handleDigit, handleComma }) => {
  const getButtons = () => {
    const digits = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
    const buttons = [];
    digits.forEach((digit) => {
      let btnClsName = "digits__button--lightgrey";
      if (digit === 0) {
        btnClsName =
          btnClsName + " digits__button--width-wide border-bottom-left-radius";
      } else {
        btnClsName = btnClsName + " digits__button--width-normal";
      }
      buttons.push(
        <Button
          onButtonClick={handleDigit}
          sign={digit}
          key={digit}
          className={btnClsName}
        />
      );
    });
    buttons.push(
      <Button
        onButtonClick={handleComma}
        sign={","}
        key={"comma"}
        className="digits__button--lightgrey digits__button--width-normal"
      />
    );
    return buttons;
  };
  return <div className="digits">{getButtons()}</div>;
};

export default Digits;
