import React from "react";
import "./Product.css";

function Product({ name, description, price }) {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  );
}

export default Product;
