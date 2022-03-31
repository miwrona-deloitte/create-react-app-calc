export const Screen = ({ displayValue, fontCls }) => (
  <div className="screen">
    <p className={"display " + fontCls}>{displayValue}</p>
  </div>
);
