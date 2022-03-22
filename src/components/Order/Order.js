import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";import React from 'react';
import './Order.css'

const Order = ({ product }) => {
  // total price are here
  const totalPrice= product.reduce((first, second)=>first+second.price, 0);
  // shipping charge are here
  let price;
  if (totalPrice > 0 && totalPrice <= 1000) {
    price = 150;
  } else if (totalPrice > 0 && totalPrice <= 2500) {
    price = 80;
  } else {
    price = 0;
  }
  // tax section are here
  const taxFloat = (totalPrice * 0.1).toFixed(2);
  const tax = parseFloat(taxFloat);
  // grand total price
  const grandTotal = totalPrice+price+tax
  return (
    <div>
      <div className="order-details">
        <p>Selected Items: {product.length}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Shipping Charge: ${price}</p>
        <p>Tax: ${tax}</p>
        <h3 className="grand-total">Grand Total: ${grandTotal}</h3>
      </div>

      <button className="clear-cart btn">
        <p>Clear Cart</p>
        <FontAwesomeIcon className="icon" icon={faTrashCan} />
      </button>
      <button className="review-order btn">
        <p>Review Order</p>
        <FontAwesomeIcon className="icon" icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Order;