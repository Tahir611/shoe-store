import React from "react";
import "../../../src/App.css";
import {  Outlet } from "react-router-dom";


const Products = () => {
  return (
    <>
      <div className="App">
        <h1>Welcome to products</h1>
        <Outlet />
      </div>
    </>
  );
};

export default Products;

// export function ProductItem() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "space-between",
//         width: "90%",
//         margin: "auto",
//       }}
//     >
//       {Object.entries(shoe).map(([slug, { name, imgUrl }]) => {
//         return (
//           <div style={{ padding: "20px" }} key={slug}>
//             <Link to={`/product/${slug}`}>
//               <h4>{name}</h4>
//               <img
//                 width={300}
//                 height={300}
//                 src={imgUrl}
//                 style={{ objectFit: "cover" }}
//                 alt=""
//               />
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export function ProductDetail () {

//   const {slug} = useParams();
//   const shoes = shoe[slug] ;
//   const {name, imgUrl} = shoes
//   return (
//     <div>
//       <h2>{name}</h2>
//       <img width={300} src={imgUrl} alt="" />
//     </div>
//   )
// }


// const shoe = {
//   "NIKE-SHOES": {
//     name: "NIKE SHOES",
//     imgUrl:
//       "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJyYW5kZWQlMjBzaG9lcyUyMGZvciUyMG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//     price: 110,
//   },

//   "ADIDAS-SNEAKER": {
//     name: "ADIDAS SNEAKER",
//     imgUrl:
//       "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJhbmRlZCUyMHNob2VzJTIwZm9yJTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     price: 91,
//   },

//   "CLASIC-SHOE": {
//     name: "CLASIC SHOE",
//     imgUrl:
//       "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     price: 94.5,
//   },

//   "NIKE-AIR-FORCE": {
//     name: "NIKE AIR FORCE",
//     imgUrl:
//       "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
//     price: 438.9,
//   },

//   "EDITORIAL-SHOE": {
//     name: "EDITORIAL SHOE",
//     imgUrl:
//       "https://images.unsplash.com/photo-1550399865-ec7d23b18e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80",
//     price: 20,
//   },
//   "EDITORIAL-SHOE-1": {
//     name: "EDITORIAL SHOE",
//     imgUrl:
//       "https://images.unsplash.com/photo-1550399865-ec7d23b18e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80",
//     price: 20,
//   },
//   "EDITORIAL-SHOE-2": {
//     name: "EDITORIAL SHOE",
//     imgUrl:
//       "https://images.unsplash.com/photo-1550399865-ec7d23b18e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80",
//     price: 20,
//   },
//   "EDITORIAL-SHOE-3": {
//     name: "EDITORIAL SHOE",
//     imgUrl:
//       "https://images.unsplash.com/photo-1550399865-ec7d23b18e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80",
//     price: 20,
//   },
//   "EDITORIAL-SHOE-4": {
//     name: "EDITORIAL SHOE",
//     imgUrl:
//       "https://images.unsplash.com/photo-1550399865-ec7d23b18e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80",
//     price: 20,
//   },
// };

