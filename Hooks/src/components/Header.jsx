import React from "react";

const Header = () => {
  return (
    <div>
      <h2>This is Header Component</h2>
      {console.log("Header Component Rendered")}
    </div>
  );
};

export default React.memo(Header);
