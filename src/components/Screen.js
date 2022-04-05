import "./Screen.scss";

export const Screen = ({ displayValue }) => {
  let fontCls = "screen--font-regular";
  if (displayValue.length > 7) {
    fontCls = "screen--font-small";
  }
  return (
    <div className="screen">
      <p className={"screen__display " + fontCls}>
        {String(displayValue).replace(".", ",")}
      </p>
    </div>
  );
};
