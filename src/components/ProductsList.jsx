import React from "react";
import ProductsData from "../assets/ProductsData.json";

const ProductsList = () => {
  console.log(ProductsData);
  return (
    <div className="grid grid-cols-1 md: grid-cols-2 lg: grid-cols-3">
      {/* map through the products data and display each product */}

      {ProductsData.map((product) => (
        <div className="border-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in">
          <img
            className="w-full h-48 object-cover"
            src={product.image}
            alt={product.name}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
