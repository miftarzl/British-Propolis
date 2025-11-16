import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import searchIcon from '../assets/images/search0.png'
import shoppingCartIcon from '../assets/images/shopping-cart0.png'
import profileIcon from '../assets/images/profile0.png'

const Header = ({ isLoggedIn = false }) => {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <header className="fixed top-0 left-0 w-full h-[100px] bg-white z-50">
      <div className="relative w-full h-full max-w-[1920px] mx-auto">
        {/* Brand */}
        <div className="absolute left-[150px] top-[17px]">
          <div className="text-right">
            <h1 className="font-racing text-[40px] leading-none">
              <span className="text-brand-red">DANTE</span>
              <span className="text-brand-blue ml-1.5">PROPOLIS</span>
            </h1>
            <p className="text-[12px] mt-1 ml-[100px] text-right">
              <span className="font-poppins">Distributor Resmi</span>
              <span className="mx-1"> </span>
              <span className="font-racing font-bold text-brand-blue">BRITISH</span>
              <span className="mx-1"> </span>
              <span className="font-racing font-bold text-brand-red">PROPOLIS</span>
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="absolute top-[30px] flex items-center">
          <Link to="/" className={`absolute left-[730px] w-[100px] h-10 flex items-center justify-center font-poppins font-bold text-[20px] hover:opacity-80 ${isActive('/') ? 'text-brand-red' : 'text-black'}`}>
            Beranda
          </Link>
          <Link to="/tentang-kami" className={`absolute left-[880px] w-[160px] h-10 flex items-center justify-center font-poppins font-bold text-[20px] hover:opacity-80 ${isActive('/tentang-kami') ? 'text-brand-red' : 'text-black'}`}>
            Tentang Kami
          </Link>
          <Link to="/produk" className={`absolute left-[1090px] w-[100px] h-10 flex items-center justify-center font-poppins font-bold text-[20px] hover:opacity-80 ${isActive('/produk') ? 'text-brand-red' : 'text-black'}`}>
            Produk
          </Link>
          
          {/* Search */}
          <img src={searchIcon} alt="Cari" className="absolute left-[1400px] w-10 h-10" />
          <input
            type="text"
            placeholder="Cari Produk..."
            className="absolute left-[1450px] w-[150px] h-10 flex items-center font-poppins font-bold text-[20px] text-black outline-none bg-transparent placeholder:text-black"
          />

          {isLoggedIn ? (
            <>
              <img src={shoppingCartIcon} alt="Keranjang" className="absolute left-[1640px] w-[50px] h-[50px] cursor-pointer hover:opacity-80" />
              <img src={profileIcon} alt="Profil" className="absolute left-[1725px] w-[50px] h-[50px] cursor-pointer hover:opacity-80" />
            </>
          ) : (
            <Link
              to="/login"
              className="absolute left-[1650px] w-[120px] h-10 rounded-[50px] bg-brand-red flex items-center justify-center font-poppins font-bold text-[20px] text-white hover:opacity-90 transition-opacity"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header

