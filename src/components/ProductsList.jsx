import React from "react";
import ProductsData from "../assets/ProductsData.json";

const ProductsList = () => {
  console.log(ProductsData);
  return (
    <div className="grid grid-cols-1 md: grid-cols-2 lg: grid-cols-3 gap-4">
      {/* map through the products data and display each product */}

      {ProductsData.map((product) => (
        <div className="border-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in">
          <img
            className="w-full h-48 object-cover"
            src={product.image}
            alt={product.name}
          />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">{product.name}</h2>
            <p className="text-gray-600 truncate">{product.description}</p>

            <div className="flex justify-between items-center">
              <span className="text-blue-600 font-semibold">
                ${product.price}
              </span>
              <div className="text-sm text-gray-500">
                {product.stock > 0
                  ? `${product.stock} in Stock`
                  : "Out of Stock"}
              </div>
            </div>

            <div className="mt-4">
              <span className="text-yellow-500">
                {"★".repeat(Math.round(product.rating))}
              </span>

              <span className="text-gray-300">
                {"★".repeat(Math.round(5 - product.rating))}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
