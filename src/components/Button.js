const Button = ({ sign, onButtonClick, className }) => {
  return (
    <button
      onClick={onButtonClick}
      type="button"
      className={"button " + className}
      value={sign}
    >
      {sign}
    </button>
  );
};

export default Button;
