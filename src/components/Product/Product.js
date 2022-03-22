import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = ({ product, addCartToClick }) => {
  const { name, seller, price, ratings, img } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3 className="title">{name}</h3>
        <h4 className="price">Price: ${price}</h4>
        <p>Seller: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button className="cart" onClick={()=>{addCartToClick(product)}}>
        <p>Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;