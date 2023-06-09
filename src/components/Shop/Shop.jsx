import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
     const [products, setProducts] = useState([]);
     const [cart, setCart] = useState([]);

     useEffect(() => {
          fetch('products.json')
               .then(res => res.json())
               .then(data => setProducts(data));
     }, []);
     
     useEffect(() => {
          const storedCart = getShoppingCart();
          const savedCart = [];

          //step 1: get id
          for (const id in storedCart) {
               // console.log(id);

               //step 2: get the product by using id
               const addedProduct = products.find(product => product.id === id);

               if (addedProduct) {

                    // step3: get quantity of the product
                    const quantity = storedCart[id];
                    addedProduct.quantity = quantity;
                    // console.log(addedProduct);

                    //step 4: add the added product to the saved cart
                    savedCart.push(addedProduct);
               }
          }

          //step 5: set cart
          setCart(savedCart)

     }, [products]);

     const handleClearCart = () => {
          setCart([]);
          deleteShoppingCart();
     }

     const handleAddToCart = (product) => {
          let newCart = [];
          // const newCart = [...cart, product];

          // if product doesn't exist in the cart, then set quantity =1
          // if exist update quantity by 1

          const exists = cart.find(pd => pd.id === product.id);
          if(!exists){
               product.quantity = 1;
               newCart = [...cart, product];
          }
          else{
               exists.quantity = exists.quantity + 1;
               const remaining = cart.filter(pd => pd.id !== product.id);
               newCart = [...remaining, exists];
          }

          setCart(newCart);
          addToDb(product.id)
     };
     return (
          <div className='shop-container'>
               <div className='product-container'>
                    {products.map(product => <Product
                         key={product.id}
                         product={product}
                         handleAddToCart={handleAddToCart}
                    ></Product>)}
               </div>
               <div className='cart-container'>
                    <Cart
                         cart={cart}
                         handleClearCart={handleClearCart}
                    >
                         <div>
                         <Link className='proceed-link' to='/orders'>
                              <button className='btn-proceed'>Orders Review</button>
                         </Link>
                         </div>
                    </Cart>
               </div>
               
          </div>
     );
};

export default Shop;