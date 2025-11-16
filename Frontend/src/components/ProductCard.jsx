import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div className="w-full bg-[#f1f1f1] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="w-full aspect-square bg-white flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-black font-poppins font-medium text-[18px] mb-2">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-brand-red font-poppins font-bold text-[24px]">
            {product.price}
          </p>
          <Link
            to={`/produk/${product.id}`}
            className="px-6 py-2 bg-brand-red text-white font-poppins font-semibold text-[16px] rounded-lg hover:opacity-90 transition-opacity"
          >
            Pesan
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

