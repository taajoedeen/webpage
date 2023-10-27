import React from "react";
import "./App.css";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Product from "./Product";

function App() {
  const products = [
    {
      name: "Product 1",
      description: "Description for Product 1",
      price: 19.99,
    },
    {
      name: "Product 2",
      description: "Description for Product 2",
      price: 24.99,
    },
    {
      name: "Product 3",
      description: "Description for Product 3",
      price: 29.99,
    },
  ];

  const isLoggedIn = false; // Set to true to simulate a logged-in user

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} />
      <LandingPage />
      <div className="products">
        {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
