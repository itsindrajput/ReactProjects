const ButtonContainer = ({ handle }) => {
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    "C",
    "=",
    "+",
  ];

  return (
    <div className="button-grid">
      {buttons.map((item) => (
        <button
          key={item}
          className={`calc-button ${item === "=" ? "equals" : ""} ${
            item === "C" ? "clear" : ""
          }`}
          onClick={() => handle(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
