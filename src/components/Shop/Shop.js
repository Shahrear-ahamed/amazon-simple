import React from "react";
import { useNavigate } from "react-router-dom";
import useCarts from "../../hooks/useCarts";
import useProducts from "../../hooks/useProducts";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products] = useProducts([]);
  const [cart, setCart] = useCarts(products);
  const navigate = useNavigate();

  const addCartToClick = (data) => {
    let newProduct = [];
    const exist = cart.find(product=> product.id === data.id);
    if(!exist){
      data.quantity = 1;
      newProduct=[...cart,data];
    }else{
      const rest = cart.filter(product=> product.id !== data.id)
      exist.quantity = exist.quantity+1;
      newProduct=[...rest,exist];
    }
    setCart(newProduct);
    addToDb(data.id);
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
        <Cart product={cart}>
          <button onClick={()=>navigate("/orders")}>Order Now</button>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
