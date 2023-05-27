import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleClearCart }) => {
  // const cart = props.cart; option-1
  // const {cart} =props; option-2
  // console.log(cart);

  let totalPrice = 0;
  let shippingTotal = 0;
  let quantity = 0;

  //  if(product.quantity === 0){
  //   product.quantity = 1;
  //  }

  //product.quantity = product.quantity || 1;

  for (const product of cart) {
    totalPrice = totalPrice + product.price * product.quantity;
    shippingTotal = shippingTotal + product.shipping * product.quantity;
    quantity = quantity + product.quantity;
  }

  const tax = (totalPrice * 3) / 100;
  const grandTotal = totalPrice + shippingTotal + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected item: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${shippingTotal}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h5>Grand Total: ${grandTotal.toFixed(2)} </h5>
      <button onClick={handleClearCart} className="btn-clear-cart">
        <span>Clear Cart</span>
        <FontAwesomeIcon icon={faTrashCan}/>
      </button>
    </div>
  );
};

export default Cart;
