import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./productDetail.css";

const ProductDetail = (props) => {
  const [first, setFirst] = useState(1);
  const { slug } = useParams();
  const shoes = shoe[slug];
  const { name, imgUrl, price } = shoes;
  console.log(name, imgUrl, price);
  const handleCart = (e) => {
    e.preventDefault();
    setFirst(first + 1);
    console.log(first);
    props.setCart(first);
  }
  return (
    // <div className='main'>
    //   <div className='img'>
    //   {/* <h2>{name}</h2> */}
    //   {/* <h5 style={{color: 'black', paddingBottom: '20px'}}>{price}</h5> */}
    //   <img width={500}height={500} style={{objectFit: 'cover'}} src={imgUrl} alt="" />
    // </div>
    // <div className='detail'>
    //   <h2>DETAILS</h2>
    //   <h2>{name}</h2>
    //   <h5 style={{color: 'black', paddingBottom: '20px'}}>Price: ${price}/-</h5>

    // </div>
    // </div>
<>
    <main className="container">
      {/* Left Column / Headphones Image */}
      <div className="left-column">

        <img src={imgUrl} width={500} height={500} style={{objectFit: 'cover'}}  alt={imgUrl} />
        
      </div>
      {/* Right Column */}
      <div className="right-column">
        {/* Product Description */}
        <div className="product-description">
          <span>Shoes</span>
          <h1>{name}</h1>
          <p>
            The preferred choice of a vast range of acclaimed shoes. 
          </p>
        </div>
        
        
        {/* Product Pricing */}
        <div className="product-price">
          <span>${price}</span>
          <button className="cart-btn" onClick={handleCart}>
            Add to cart
          </button>
        </div>
      </div>
    </main>
    </>
  );
};

export default ProductDetail;

const shoe = {
  "NIKE-SHOES": {
    name: "NIKE SHOES",
    imgUrl:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJyYW5kZWQlMjBzaG9lcyUyMGZvciUyMG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 110,
  },

  "ADIDAS-SNEAKER": {
    name: "ADIDAS SNEAKER",
    imgUrl:
      "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJhbmRlZCUyMHNob2VzJTIwZm9yJTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 91,
  },

  "CLASIC-SHOE": {
    name: "CLASIC SHOE",
    imgUrl:
      "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    price: 94.5,
  },

  "NIKE-AIR-FORCE": {
    name: "NIKE AIR FORCE",
    imgUrl:
      "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    price: 438.9,
  },

  "EDITORIAL-SHOE": {
    name: "EDITORIAL SHOE",
    imgUrl:
      "https://images.unsplash.com/photo-1550399865-ec7d23b18e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80",
    price: 20,
  },
  "EDITORIAL-SHOE-1": {
    name: "EDITORIAL SHOE",
    imgUrl:
      "https://images.unsplash.com/photo-1550399865-ec7d23b18e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80",
    price: 20,
  },
  "EDITORIAL-SHOE-2": {
    name: "EDITORIAL SHOE",
    imgUrl:
      "https://images.unsplash.com/photo-1550399865-ec7d23b18e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80",
    price: 20,
  },
  "EDITORIAL-SHOE-3": {
    name: "EDITORIAL SHOE",
    imgUrl:
      "https://images.unsplash.com/photo-1550399865-ec7d23b18e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80",
    price: 20,
  },
  "EDITORIAL-SHOE-4": {
    name: "EDITORIAL SHOE",
    imgUrl:
      "https://images.unsplash.com/photo-1550399865-ec7d23b18e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80",
    price: 20,
  },
};
