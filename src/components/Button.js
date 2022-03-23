const Button = ({ sign, onButtonClick }) => {
  const className = sign === 0 ? "button wide" : "button";
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
