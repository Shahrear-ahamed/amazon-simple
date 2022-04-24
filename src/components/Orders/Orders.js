import React from "react";
import { useNavigate } from "react-router-dom";
import useCarts from "../../hooks/useCarts";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItems from "../ReviewItem/ReviewItems";
import "./Orders.css";
const Orders = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCarts(products);
  const navigate = useNavigate();
  const removeProduct = (product) => {
    const rest = cart.filter(
      (singleProduct) => singleProduct._id !== product._id
    );
    setCart(rest);
    removeFromDb(product._id);
  };

  return (
    <div className="shop-section">
      <div className="review-items-container">
        {cart.map((product) => (
          <ReviewItems
            key={product._id}
            product={product}
            removeProduct={removeProduct}
          />
        ))}
      </div>
      <div className="order-summary">
        <Cart product={cart}>
          <button onClick={() => navigate("/shipping")}>Go Shipment</button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
