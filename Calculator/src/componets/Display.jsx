const Display = ({ display }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Calculate Here!"
        readOnly
        value={display}
        style={{ width: "40%", height: "50px" }}
      />
    </div>
  );
};

export default Display;
