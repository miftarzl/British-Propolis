import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import rect27 from '../assets/images/rectangle-270.png'
import rect18 from '../assets/images/rectangle-180.png'
import rect19 from '../assets/images/rectangle-190.png'
import rect17 from '../assets/images/rectangle-170.png'
import shoppingCartIcon from '../assets/images/shopping-cart0.png'

const DetailProduk = () => {
  const { id } = useParams()
  const [selectedVariant, setSelectedVariant] = useState('dus')
  const [quantity, setQuantity] = useState(1)
  const [available] = useState(10)

  const product = {
    id: 1,
    name: 'British Propolis (Dewasa)',
    price: 'Rp 250.000,-',
    image: rect27,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  }

  const relatedProducts = [
    { id: 1, image: rect27, name: 'British Propolis (D...)', price: 'Rp 250.000' },
    { id: 2, image: rect18, name: 'Steffi Pro', price: 'Rp 250.000' },
    { id: 3, image: rect19, name: 'British Propolis Gr...', price: 'Rp 250.000' },
    { id: 4, image: rect17, name: 'Belgie Face Serum', price: 'Rp 250.000' },
  ]

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta
    if (newQuantity >= 1 && newQuantity <= available) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden">
      <Header isLoggedIn={true} />
      
      {/* Main Content */}
      <div className="relative w-full mt-[100px] pb-20">
        <div className="relative w-full max-w-[1920px] mx-auto px-[150px] pt-16">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-8">
            <Link to="/" className="text-black font-poppins font-normal text-[16px] hover:text-brand-red transition-colors">
              Beranda
            </Link>
            <span className="text-black font-poppins font-normal text-[16px]"> &gt; </span>
            <Link to="/produk" className="text-black font-poppins font-normal text-[16px] hover:text-brand-red transition-colors">
              Produk
            </Link>
            <span className="text-black font-poppins font-normal text-[16px]"> &gt; </span>
            <span className="text-brand-red font-poppins font-normal text-[16px]">
              Detail Produk
            </span>
          </div>

          {/* Product Detail Section */}
          <div className="flex gap-12 mb-16">
            {/* Product Images - Left */}
            <div className="w-1/2">
              <div className="relative w-full aspect-square bg-[#f1f1f1] rounded-lg overflow-hidden flex items-center justify-center p-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Product Information - Right */}
            <div className="w-1/2">
              <h1 className="text-black font-poppins font-bold text-[36px] mb-4">
                {product.name}
              </h1>
              
              <p className="text-brand-red font-poppins font-bold text-[32px] mb-6">
                {product.price}
              </p>

              {/* Variants */}
              <div className="mb-6">
                <p className="text-black font-poppins font-semibold text-[18px] mb-3">
                  Pilih Varian:
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedVariant('botol')}
                    className={`px-6 py-3 rounded-lg font-poppins font-semibold text-[16px] transition-all ${
                      selectedVariant === 'botol'
                        ? 'bg-brand-red text-white'
                        : 'bg-[#f1f1f1] text-black hover:bg-gray-200'
                    }`}
                  >
                    Botol
                  </button>
                  <button
                    onClick={() => setSelectedVariant('dus')}
                    className={`px-6 py-3 rounded-lg font-poppins font-semibold text-[16px] transition-all ${
                      selectedVariant === 'dus'
                        ? 'bg-brand-red text-white'
                        : 'bg-[#f1f1f1] text-black hover:bg-gray-200'
                    }`}
                  >
                    Dus
                  </button>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <p className="text-black font-poppins font-semibold text-[18px] mb-3">
                  Jumlah:
                </p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center text-black font-poppins font-bold text-[20px] hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="w-16 h-10 text-center border-2 border-gray-300 rounded-lg font-poppins font-semibold text-[18px]"
                  />
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center text-black font-poppins font-bold text-[20px] hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                  <span className="text-black font-poppins font-normal text-[16px] ml-4">
                    Tersedia {available}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 px-6 py-4 border-2 border-brand-red rounded-lg bg-white text-brand-red font-poppins font-semibold text-[18px] flex items-center justify-center gap-2 hover:bg-red-50 transition-colors">
                  <img src={shoppingCartIcon} alt="" className="w-6 h-6" />
                  Masukkan Keranjang
                </button>
                <button className="flex-1 px-6 py-4 bg-brand-red rounded-lg text-white font-poppins font-semibold text-[18px] hover:opacity-90 transition-opacity">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </div>

          {/* Product Description Section */}
          <div className="mb-16">
            <h2 className="text-brand-red font-poppins font-bold text-[32px] mb-6">
              Deskripsi Produk
            </h2>
            <div className="text-black font-poppins font-normal text-[16px] leading-relaxed space-y-4">
              <p>{product.description}</p>
              <p>{product.description}</p>
            </div>
          </div>

          {/* Related Products Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="flex-1 h-px bg-brand-red"></div>
              <h2 className="text-brand-red font-poppins font-bold text-[32px] mx-6 text-center">
                Produk lainnya yang mungkin kamu suka
              </h2>
              <div className="flex-1 h-px bg-brand-red"></div>
            </div>
            
            <div className="grid grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default DetailProduk

