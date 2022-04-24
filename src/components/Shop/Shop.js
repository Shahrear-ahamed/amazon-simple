import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCarts from "../../hooks/useCarts";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCarts(products);
  const navigate = useNavigate();
  const [pageCount, setPageCount] = useState(0); // total pages
  const [page, setPage] = useState(0); // which page are here
  const [size, setSize] = useState(10); // total number showen

  // load product
  useEffect(() => {
    fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);

  // set pagination count and related other things
  useEffect(() => {
    fetch("http://localhost:5000/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);

  const addCartToClick = (data) => {
    let newProduct = [];
    const exist = cart.find((product) => product._id === data._id);
    if (!exist) {
      data.quantity = 1;
      newProduct = [...cart, data];
    } else {
      const rest = cart.filter((product) => product._id !== data._id);
      exist.quantity = exist.quantity + 1;
      newProduct = [...rest, exist];
    }
    setCart(newProduct);
    addToDb(data._id);
  };
  return (
    <div className="shop-section">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            addCartToClick={addCartToClick}
          ></Product>
        ))}
      </div>
      <div className="order-summary">
        <Cart product={cart}>
          <button onClick={() => navigate("/orders")}>Order Now</button>
        </Cart>
      </div>
      <div className="pagination">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            onClick={() => setPage(number)}
            className={page === number ? "selected" : ""}
            key={number}
          >
            {number + 1}
          </button>
        ))}
        <select defaultValue={size} onChange={(e) => setSize(e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;
