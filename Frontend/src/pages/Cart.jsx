import React from 'react'
import { Link } from 'react-router-dom'
import produkImage from '../assets/images/rectangle-40.png'

const Cart = () => {
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
              <span className="text-brand-red font-medium">Keranjang</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-brand-red mb-8">KERANJANG BELANJA</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items Table */}
          <div className="flex-grow">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-12 bg-brand-red text-white p-4">
                <div className="col-span-1">
                  <input type="checkbox" className="rounded border-gray-300" />
                </div>
                <div className="col-span-5">Produk</div>
                <div className="col-span-2 text-center">Harga</div>
                <div className="col-span-2 text-center">Kuantitas</div>
                <div className="col-span-2 text-center">Total Harga</div>
              </div>

              {/* Cart Items */}
              {cartItems.map((item) => (
                <div key={item.id} className="grid grid-cols-12 border-b p-4 items-center">
                  <div className="col-span-1">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </div>
                  <div className="col-span-5">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.variant}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-center">{formatPrice(item.price)}</div>
                  <div className="col-span-2">
                    <div className="flex items-center justify-center space-x-2">
                      <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        className="w-12 text-center border rounded"
                        readOnly
                      />
                      <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-span-2 text-center text-brand-red font-medium">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
              ))}

              {/* Delete All Button */}
              <div className="p-4 border-t">
                <button className="text-brand-red font-medium hover:underline">
                  Hapus Semua Produk
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-80">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Ringkasan Pesanan</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Jumlah Produk</span>
                  <span>3</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Harga</span>
                  <span>{formatPrice(750000)}</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between font-semibold text-brand-red">
                  <span>Total</span>
                  <span>{formatPrice(750000)}</span>
                </div>
                <button className="w-full bg-brand-red text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart