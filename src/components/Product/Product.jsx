import React from 'react';
import './Product.css';

const Product = (props) => {
     console.log(props.product);
     const {img, name, price, ratings, seller} = props.product
     return (
       <div className="product">
         <img src={img} alt="" />
         <div className='product-info'>
               <h5 className='product-name'>{name}</h5>
               <p>Price: ${price}</p>
               <p>Manufacturer: {seller}</p>
               <p>Rating: {ratings} Stars</p>
          </div>
          <button className='btn-cart'>Add to cart</button>
       </div>
     );
};

export default Product;