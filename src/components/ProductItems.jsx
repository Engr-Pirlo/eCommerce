import React from 'react'


const ProductItems = ({product}) => {
  return (
    <div className="border-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in">
    <img
      className="w-full h-48 object-cover"
      src={product.thumbnail}
      alt={product.title}
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
  )
}

export default ProductItems