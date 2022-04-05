const Button = ({ sign, onButtonClick, className }) => {
  let btnClsName = className ? "button button--width-normal " + className : "button button--width-normal";
  if (sign === 0) {
    btnClsName = className + " button digits__button--width-wide border-bottom-left-radius";
  } else if (sign === "=") {
    btnClsName = btnClsName + " border-bottom-right-radius";
  }
  return (
    <button
      onClick={onButtonClick}
      type="button"
      className={btnClsName}
      value={sign}
    >
      {sign}
    </button>
  );
};

export default Button;
