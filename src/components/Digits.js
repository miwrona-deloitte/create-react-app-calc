import Button from "./Button";
import "./Digits.scss";
const Digits = ({ handleDigit, handleComma }) => {
  const getButtons = () => {
    const digits = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
    const buttons = [];
    digits.forEach((digit) => {
      buttons.push(
        <Button
          onButtonClick={handleDigit}
          sign={digit}
          key={digit}
          className="digits__button--lightgrey"
        />
      );
    });
    buttons.push(
      <Button
        onButtonClick={handleComma}
        sign={","}
        key={"comma"}
        className="digits__button--lightgrey"
      />
    );
    return buttons;
  };
  return <div className="digits">{getButtons()}</div>;
};

export default Digits;
