import React from 'react';
import './userpage.css'
import {Row } from "react-bootstrap";
import { useCart } from "react-use-cart";

export default function Product({ id, crop,  image ,price, item }) {

  const { addItem } = useCart();
  return (
          


    <div key={id} className="content1">
    <div    className="card-flex-wrapper">
    <div className="card-flex-image" >
      <img src={image} 
            alt="img placeholder" />
    </div>
    <div className="card-flex-content">
      <h5 className='crop'  >{crop}</h5>
      <p >price Rs {price}</p>
      
   
          
   <button   onClick={() => addItem(item)} className='addcart-btn'>ADD TO CART</button>
   </div>
  </div>
  </div>
    
    
  );
}