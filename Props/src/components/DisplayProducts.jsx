import { useState, useEffect } from "react";

const DisplayProducts = () => {
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setApiData(data.products))
      .catch((error) => console.error("Error While fetching data:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      console.log("Please enter product for search");
      alert("Please enter product for search");
      return;
    }

    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((resp) => resp.json())
      .then((data) => setApiData(data.products))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Product Display</h1>
      <div style={{ marginLeft: "85px" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div
        style={{
          width: "90%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        {apiData.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
              width: "250px",
            }}
          >
            <h3>{product.brand}</h3>
            <h5>{product.title}</h5>
            <p>Price: ${product.price}</p>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "100px" }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayProducts;
