import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";import React from 'react';
import './Order.css'

const Order = ({ product }) => {  
  // set price and shipping charge are add by using for of also can use reduce 
  let totalPrice = 0;
  let shipping = 0;
  for(const cartProduce of product){
    totalPrice = totalPrice+cartProduce.price;
    shipping = shipping + cartProduce.shipping;
  }
  
  // tax section are here
  const taxFloat = (totalPrice * 0.1).toFixed(2);
  const tax = parseFloat(taxFloat);
  // grand total price
  const grandTotal = totalPrice+shipping+tax;


  return (
    <div>
      <div className="order-details">
        <h2 className="order-title">Order Summary</h2>
        <p>Selected Items: {product.length}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Shipping Charge: ${shipping}</p>
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