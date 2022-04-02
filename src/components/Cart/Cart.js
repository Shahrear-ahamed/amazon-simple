import React from 'react';
import './Cart.css'



const Cart = ({ product, children }) => {
  // set price and shipping charge are add by using for of also can use reduce 
  let totalPrice = 0;
  let shipping = 0;
  let quantity = 0;
  for(const cartProduce of product){
    totalPrice = totalPrice + (cartProduce.price * cartProduce.quantity);
    shipping = shipping + cartProduce.shipping;
    quantity = quantity + cartProduce.quantity;
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
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h3 className="grand-total">Grand Total: ${grandTotal.toFixed(2)}</h3>
      </div>
      {children}
    </div>
  );
};

export default Cart;
