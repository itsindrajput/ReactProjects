import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setApiData(data.products))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      console.log("Search query is empty.");
      return;
    }
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => setApiData(data.products))
      .catch((error) => console.log("Error fetching search results:", error));
  };

  const handleSort = (criteria) => {
    let sortedData = [...apiData];
    if (criteria === "price-asc") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (criteria === "price-desc") {
      sortedData.sort((a, b) => b.price - a.price);
    } else if (criteria === "rating-asc") {
      sortedData.sort((a, b) => a.rating - b.rating);
    } else if (criteria === "rating-desc") {
      sortedData.sort((a, b) => b.rating - a.rating);
    }
    setApiData(sortedData);
  }; 

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "inherit",
          justifyContent: "space-between",
        }}
      >
        {/* Search Functionality Begins Here */}
        <div
          style={{
            margin: "30px",
            display: "flex",
            gap: "10px",
          }}
        >
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ width: "300px", height: "40px" }}
            />
            <button type="submit" style={{ height: "45px", width: "150px" }}>
              Search
            </button>
          </form>
        </div>

        {/*Filter Functionality Begins Here*/}
        <div style={{ margin: "30px", display: "flex", gap: "10px" }}>
          <button
            onClick={() => {
              handleSort("price-asc");
            }}
          >
            Price ⬆️
          </button>
          <button
            onClick={() => {
              handleSort("price-desc");
            }}
          >
            Price ⬇️
          </button>
          <button
            onClick={() => {
              handleSort("rating-asc");
            }}
          >
            Rating ⬆️
          </button>
          <button
            onClick={() => {
              handleSort("rating-desc");
            }}
          >
            Rating ⬇️
          </button>
        </div>
      </div>
      {/* Product Display Begins Here */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {apiData.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid grey",
              width: "250px",
              backgroundColor: "#f0f0f0",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <img src={item.thumbnail} alt={item.title} width="200" />
            <h3>Brand: {item.brand}</h3>
            <h5>
              <i>Title: {item.title}</i>
            </h5>
            <div style={{ display: "flex", gap: "20px" }}>
              <p>Price: ₹ {item.price}</p>
              <p>Rating: {item.rating}</p>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <p>Stock: {item.stock}</p>
              <p>Discount: {item.discountPercentage}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FetchData;
