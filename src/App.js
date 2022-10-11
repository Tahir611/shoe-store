import React, { useState } from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "./componets/home/Home";
import About from "./componets/about/About";
import Products from "./componets/products/Products";
import ProductItem from "./componets/products/ProductItem";
// import { ProductItem, ProductDetail } from "./componets/products/Products";
import ProductDetail from "./componets/products/ProductDetail";
import Navbar from "./componets/navbar/Navbar";

const App = () => {
  const [cart, setCart] = useState();
  // console.log(cart);
  return (
    <>
      
      <Navbar cart = {cart} setCart = {setCart}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Products/>}>
          <Route path="/product/" element={<ProductItem/>}/>
          <Route path=":slug" element={<ProductDetail/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
