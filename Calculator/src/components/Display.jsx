const Display = ({ display }) => {
  return (
    <div className="calculator-display">
      <input
        type="text"
        placeholder="0"
        readOnly
        value={display}
        className="display-input"
      />
    </div>
  );
};

export default Display;
