import React from "react";
import useProducts from "../../hooks/useProducts";
import useCarts from "../../hooks/useCarts";
import ReviewItems from "../ReviewItem/ReviewItems";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import "./Orders.css";
import { useNavigate } from "react-router-dom";
const Orders = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCarts(products);
  const navigate = useNavigate();
  const removeProduct = (product) => {
    const rest = cart.filter(
      (singleProduct) => singleProduct.id !== product.id
    );
    setCart(rest);
    removeFromDb(product.id);
  };

  return (
    <div className="shop-section">
      <div className="review-items-container">
        {cart.map((product) => (
          <ReviewItems
            key={product.id}
            product={product}
            removeProduct={removeProduct}
          />
        ))}
      </div>
      <div className="order-summary">
        <Cart product={cart}>
          <button onClick={() => navigate("/inventory")}>Go inventory</button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
