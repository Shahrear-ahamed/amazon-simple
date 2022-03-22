import React, { useEffect, useState } from "react";
import Order from "../Order/Order";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProduces] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduces(data));
  }, []);
  const addCartToClick = (data) => {
    const newData = [...cart, data];
    setCart(newData);
  };
  return (
    <div className="shop-section">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addCartToClick={addCartToClick}
          ></Product>
        ))}
      </div>
      <div className="order-summary">
        <h2 className="order-title">Order Summary</h2>
        <Order product={cart}></Order>
      </div>
    </div>
  );
};

export default Shop;
