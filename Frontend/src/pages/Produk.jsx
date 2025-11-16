import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import rect27 from '../assets/images/rectangle-270.png'
import rect18 from '../assets/images/rectangle-180.png'
import rect19 from '../assets/images/rectangle-190.png'
import rect17 from '../assets/images/rectangle-170.png'

const Produk = () => {
  const products = [
    { id: 1, image: rect27, name: 'British Propolis (D...)', price: 'Rp 250.000' },
    { id: 2, image: rect18, name: 'Steffi Pro', price: 'Rp 250.000' },
    { id: 3, image: rect19, name: 'British Propolis Gr...', price: 'Rp 250.000' },
    { id: 4, image: rect17, name: 'Belgie Face Serum', price: 'Rp 250.000' },
    { id: 5, image: rect27, name: 'British Propolis (D...)', price: 'Rp 250.000' },
    { id: 6, image: rect18, name: 'Steffi Pro', price: 'Rp 250.000' },
    { id: 7, image: rect19, name: 'British Propolis Gr...', price: 'Rp 250.000' },
    { id: 8, image: rect17, name: 'Belgie Face Serum', price: 'Rp 250.000' },
  ]

  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden">
      <Header isLoggedIn={true} />
      
      {/* Main Content */}
      <div className="relative w-full mt-[100px] pb-20">
        <div className="relative w-full max-w-[1920px] mx-auto px-[150px] pt-16">
          {/* Title */}
          <h1 className="text-brand-red font-poppins font-bold text-[48px] text-center mb-4 uppercase">
            PRODUK
          </h1>

          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <Link to="/" className="text-black font-poppins font-normal text-[16px] hover:text-brand-red transition-colors">
              Beranda
            </Link>
            <span className="text-black font-poppins font-normal text-[16px]"> &gt; </span>
            <span className="text-brand-red font-poppins font-normal text-[16px]">
              Produk
            </span>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Produk

