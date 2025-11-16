import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import produkImage from '../assets/images/rectangle-40.png'

const Checkout = () => {
  const [pesan, setPesan] = useState('')
  const [selectedPayment, setSelectedPayment] = useState('BCA')

  const cartItems = [
    {
      id: 1,
      name: 'British Propolis (Dewasa)',
      variant: 'Varian: Botol',
      price: 250000,
      quantity: 1,
      image: produkImage,
    },
    {
      id: 2,
      name: 'British Propolis (Dewasa)',
      variant: 'Varian: Botol',
      price: 250000,
      quantity: 1,
      image: produkImage,
    },
    {
      id: 3,
      name: 'British Propolis (Dewasa)',
      variant: 'Varian: Botol',
      price: 250000,
      quantity: 1,
      image: produkImage,
    },
  ]

  const formatPrice = (price) => {
    return `Rp ${price.toLocaleString('id-ID')}`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-500 hover:text-brand-red">
                Beranda
              </Link>
              <span className="text-gray-500">{'>'}</span>
              <Link to="/cart" className="text-gray-500 hover:text-brand-red">
                Keranjang
              </Link>
              <span className="text-gray-500">{'>'}</span>
              <span className="text-brand-red font-medium">Checkout</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-brand-red mb-8">CHECKOUT</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Forms */}
          <div className="flex-grow space-y-6">
            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-brand-red mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Alamat Pengiriman
              </h2>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-medium">Delia Putri Santoso (+62) 812 3456 7890</p>
                <p className="text-gray-600 mt-1">
                  Villa Mutiara Jaya Blok M/64 No48 RT 002 RW 11, KAB. BEKASI - CIBITUNG, JAWA BARAT, ID 17520
                </p>
              </div>
            </div>

            {/* Product List */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-brand-red mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </span>
                Produk Dipesan
              </h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-4 border-b last:border-0">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.variant}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{formatPrice(item.price)}</div>
                      <div className="text-sm text-gray-500">Jumlah: {item.quantity}</div>
                      <div className="text-brand-red font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="pt-4">
                  <textarea
                    placeholder="[Opsional] Tinggalkan pesan..."
                    value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-brand-red focus:border-brand-red"
                    rows={3}
                  />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Biaya Pengiriman:</span>
                  <span className="font-medium">{formatPrice(10000)}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-600">Total Pesanan (3 Produk):</span>
                  <span className="font-medium text-brand-red">{formatPrice(750000)}</span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-brand-red mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </span>
                Metode Pembayaran
              </h2>
              <div className="grid grid-cols-4 gap-4 mb-4">
                {['BCA', 'BCA', 'Gopay', 'Dana'].map((method) => (
                  <button
                    key={method}
                    onClick={() => setSelectedPayment(method)}
                    className={`p-3 border rounded-lg text-center transition-colors ${
                      selectedPayment === method
                        ? 'border-brand-red bg-red-50 text-brand-red'
                        : 'border-gray-200 hover:border-brand-red'
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-medium">No. Rekening:</p>
                <p className="text-brand-red font-medium mt-1">1234567890 a/n Dante Propolis</p>
                <p className="text-sm text-red-500 mt-2">
                  Pastikan anda membayar sesuai rekening dengan benar sebelum melakukan transfer. Setelah pembayaran, silahkan tunggu hingga terkonfirmasi untuk verifikasi pesanan Anda.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Order Button */}
          <div className="lg:w-80">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <button className="w-full bg-brand-red text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Buat Pesanan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout