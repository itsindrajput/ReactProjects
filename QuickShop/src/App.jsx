import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [api, setApi] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((resp) => resp.json())
      .then((data) => {
        setApi(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  // Handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("Search field cannot be empty!");
      return;
    }

    setError(""); // clear error here

    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((resp) => resp.json())
      .then((data) => {
        setApi(data.products);
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong. Try again!");
      });
  };

  // Sorting logic (client-side)
  const handleSort = (option) => {
    let sortedProducts = [...api];

    if (option === "price-asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "price-desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (option === "rating-asc") {
      sortedProducts.sort((a, b) => a.rating - b.rating);
    } else if (option === "rating-desc") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    }
    setApi(sortedProducts);
  };

  return (
    <>
      {/* Search Bar */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products..."
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}

      {/* Sorting Options */}
      <div className="sortProduct">
        <button
          className="sortButtons"
          onClick={() => {
            handleSort("price-asc");
          }}
        >
          Price ⬆️
        </button>
        <button
          className="sortButtons"
          onClick={() => {
            handleSort("price-desc");
          }}
        >
          Price ⬇️
        </button>
        <button
          className="sortButtons"
          onClick={() => {
            handleSort("rating-asc");
          }}
        >
          Rating ⬆️
        </button>
        <button
          className="sortButtons"
          onClick={() => {
            handleSort("rating-desc");
          }}
        >
          Rating ⬇️
        </button>
      </div>

      <div className="cardContainer">
        {api.map((item) => (
          <div key={item.id} className="card">
            <img src={item.thumbnail} alt={item.title} className="cardImgs" />
            <p>{item.title}</p>
            <h4>{item.brand}</h4>
            <p className="priceRating">
              <em>Price: 💰{item.price}</em>
              <b>⭐ {item.rating}</b>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
