const Button = ({ sign, onButtonClick }) => {
  let className = "button";
  if (sign === 0) {
    className = className + " wide border-bottom-left-radius";
  } else if (sign === "=") {
    className = className + " border-bottom-right-radius";
  }
  return (
    <button
      onClick={onButtonClick}
      type="button"
      className={className}
      value={sign}
    >
      {sign}
    </button>
  );
};

export default Button;
