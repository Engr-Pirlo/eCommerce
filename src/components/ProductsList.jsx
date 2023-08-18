import React, { useEffect, useState } from "react";
import ProductsData from "../assets/ProductsData.json";
import ProductItems from "./ProductItems";
import axios from "axios";

const ProductsList = () => {

  const [products , setProducts] = useState([])


    useEffect(()=>{

      const fetchProducts= async ()=> {
         const {data} = await axios.get("https://dummyjson.com/products")
        //  console.log(data.products)
         setProducts(data)
      };

      fetchProducts()

    },[])

  return (
    <div className="grid grid-cols-1 md: grid-cols-2 lg: grid-cols-3 gap-4">

      {/* map through the products data and display each product */}

      {ProductsData.map((product) => (
          <ProductItems key={product.id} product = {product}/>
      ))}
    </div>
  );
};

export default ProductsList;
