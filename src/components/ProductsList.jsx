import React, { useEffect, useState } from "react";
import ProductsData from "../assets/ProductsData.json";
import ProductItems from "./ProductItems";
import axios from "axios";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=100"
        );

        setProducts(data.products);
      } catch (e) {}
    };

    fetchProducts();
    console.log(products);
  }, []);

  return (
    <div className="grid grid-cols-1 md: grid-cols-2 lg: grid-cols-3 gap-4">
      {/* map through the products data and display each product */}

      {products.length > 0 &&
        products.map((product) => (
          <ProductItems key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductsList;
