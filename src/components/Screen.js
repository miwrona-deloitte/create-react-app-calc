import "./Screen.scss";

export const Screen = ({ displayValue }) => {
  let fontCls = "regular-font";
  if (displayValue.length > 7) {
    fontCls = "small-font";
  }
  return (
    <div className="screen">
      <p className={"display " + fontCls}>
        {String(displayValue).replace(".", ",")}
      </p>
    </div>
  );
};
