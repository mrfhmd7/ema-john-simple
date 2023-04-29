import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
  // const cart = props.cart;
  // const {cart} =props;
    console.log(cart);

     let totalPrice = 0;
     let shippingTotal = 0;
  for (const product of cart) {
       totalPrice = totalPrice + product.price;
       shippingTotal = shippingTotal + product.shipping;
     }
     
     const tax = totalPrice * 3 / 100;
     const grandTotal = totalPrice + shippingTotal + tax;

  return (
    <div className="cart">
          <h4>Order Summary</h4>
          <p>Selected item: {cart.length}</p>
          <p>Total Price: ${totalPrice}</p>
          <p>Total Shipping Charge: ${shippingTotal}</p>
          <p>Tax: ${tax.toFixed(2)}</p>
          <h5>Grand Total: ${grandTotal.toFixed(2)} </h5>
    </div>
  );
};

export default Cart;