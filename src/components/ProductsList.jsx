import React, { useEffect, useState } from "react";
import ProductsData from "../assets/ProductsData.json";
import ProductItems from "./ProductItems";
import axios from "axios";

const ProductsList = () => {

  const [products , setProducts] = useState([])


    useEffect(()=>{

      const fetchProducts= async ()=> {
         const {data} = await axios.get("https://dummyjson.com/products")
        //  console.log(data)
         setProducts(data.products)
      };

      fetchProducts()
      console.log(products)

    },[])

  return (
    <div className="grid grid-cols-1 md: grid-cols-2 lg: grid-cols-3 gap-4">

      {/* map through the products data and display each product */}
     
       {products.map((product) =>(
        <ProductItems key={product.id} product={product}/>
       ))}
     
    </div>
  );
};

export default ProductsList;
