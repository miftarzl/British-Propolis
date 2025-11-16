import React from 'react'
import { Link } from 'react-router-dom'
import homeIcon from '../assets/images/home0.png'
import productIcon from '../assets/images/product0.png'
import beeIcon from '../assets/images/bee0.png'
import mapIcon from '../assets/images/map0.png'
import phoneIcon from '../assets/images/phone0.png'
import emailIcon from '../assets/images/email1.png'
import clockIcon from '../assets/images/clock0.png'

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-b from-brand-red via-brand-red to-[#58000b]">
      {/* Main Footer Content - Red Background */}
      <div className="relative w-full max-w-[1920px] mx-auto px-[150px] py-[60px]">
        <div className="flex gap-[200px]">
          {/* Brand Information - Kiri */}
          <div className="w-[490px]">
            <h2 className="text-white font-racing text-[40px] font-normal leading-none">
              DANTE PROPOLIS
            </h2>
            <p className="text-white text-[12px] mt-2 font-poppins">
              <span>Distributor Resmi</span>
              <span className="mx-1"> </span>
              <span className="font-racing font-bold">BRITISH PROPOLIS</span>
            </p>
            <p className="text-white font-poppins font-normal text-[24px] mt-5 text-justify">
              Dante Propolis adalah distributor resmi British Propolis dan produk kesehatan alami terpercaya.
              Kami berkomitmen menyediakan produk berkualitas tinggi untuk mendukung gaya hidup sehat Anda.
            </p>
          </div>

          {/* Navigasi Cepat - Tengah */}
          <div>
            <h3 className="text-white font-poppins font-semibold text-[24px] mb-5">
              Navigasi Cepat
            </h3>
            <div className="space-y-5">
              <Link to="/" className="flex items-center gap-3 text-white font-poppins font-normal text-[20px] hover:opacity-80 transition-opacity">
                <img src={homeIcon} alt="" className="w-[30px] h-[30px] opacity-70" />
                <span>Beranda</span>
              </Link>
              <Link to="/produk" className="flex items-center gap-3 text-white font-poppins font-normal text-[20px] hover:opacity-80 transition-opacity">
                <img src={productIcon} alt="" className="w-[30px] h-[30px] opacity-70" />
                <span>Produk</span>
              </Link>
              <Link to="/tentang-kami" className="flex items-center gap-3 text-white font-poppins font-normal text-[20px] hover:opacity-80 transition-opacity">
                <img src={beeIcon} alt="" className="w-[30px] h-[30px] opacity-70" />
                <span>Tentang Kami</span>
              </Link>
            </div>
          </div>

          {/* Informasi Toko - Kanan */}
          <div>
            <h3 className="text-white font-poppins font-semibold text-[24px] mb-5">
              Informasi Toko
            </h3>
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-white font-poppins font-normal text-[20px]">
                <img src={mapIcon} alt="" className="w-[30px] h-[30px] opacity-70" />
                <span>Jl. Contoh No. 45, Jakarta</span>
              </div>
              <div className="flex items-center gap-3 text-white font-poppins font-normal text-[20px]">
                <img src={phoneIcon} alt="" className="w-[30px] h-[30px] opacity-70" />
                <span>0812 3456 7891</span>
              </div>
              <div className="flex items-center gap-3 text-white font-poppins font-normal text-[20px]">
                <img src={emailIcon} alt="" className="w-[30px] h-[30px] opacity-70" />
                <span>support@dantepropolis.com</span>
              </div>
              <div className="flex items-center gap-3 text-white font-poppins font-normal text-[20px]">
                <img src={clockIcon} alt="" className="w-[30px] h-[30px] opacity-70" />
                <span>Jam Operasional: 07.00 – 17.00 WIB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section - Di Paling Bawah */}
      <div className="relative w-full border-t border-white/20 py-6">
        <div className="relative w-full max-w-[1920px] mx-auto px-[150px]">
          <p className="text-white font-poppins font-normal text-[18px] text-center">
            © 2025 Dante Propolis. All rights reserved. Project by 2ITSOLUTION.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

