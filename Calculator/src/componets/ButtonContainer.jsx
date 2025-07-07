const ButtonContainer = ({ handle }) => {
  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "+",
    "*",
    "/",
    "=",
    "C",
  ];

  return (
    <div style={{ padding: "20px" }}>
      {buttons.map((item) => (
        <button
          type="button"
          key={item}
          class="btn btn-outline-primary"
          style={{ margin: "10px" }}
          onClick={() => handle(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
