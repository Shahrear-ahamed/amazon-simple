import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ReviewItems.css";

const ReviewItems = ({ product, removeProduct }) => {
  const { name, img, price, quantity, shipping } = product;
  return (
    <div className="review-items">
      <dir>
        <img src={img} alt={name} />
      </dir>
      <div className="details-section-container">
        <div className="details-section">
          <h3>{name}</h3>
          <p>Price: ${price}</p>
          <p>Shipping: ${shipping}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="details-button">
          <button className="delete-btn" onClick={() => removeProduct(product)}>
            <FontAwesomeIcon className="delete-icon" icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItems;
