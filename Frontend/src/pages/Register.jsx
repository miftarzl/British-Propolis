import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bgLogin from '../assets/images/bg-login.jpeg'

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle registration logic here
    console.log('Register:', formData)
    // Navigate to login after registration
    navigate('/login')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background dengan overlay merah-orange */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgLogin}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/50 via-[#d2001a]/45 to-[#b40016]/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="pt-8 px-[150px]">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 bg-brand-red text-white font-poppins font-semibold text-[16px] rounded-lg hover:opacity-90 transition-opacity"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Kembali
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center pt-20 px-[150px]">
          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h1 className="text-white font-poppins font-bold text-[48px] mb-4">
              Hai, Selamat Datang!
            </h1>
            <p className="text-white font-poppins font-normal text-[18px] max-w-2xl">
              Daftarkan akun Anda dan nikmati kemudahan transaksi serta penawaran menarik
              untuk pelanggan dari reseller
            </p>
          </div>

          {/* Register Form */}
          <div className="w-full max-w-[500px] bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-brand-red font-poppins font-bold text-[28px] mb-6 text-center">
              Daftar Akun
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nama Lengkap Input */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Nama Lengkap"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-brand-red rounded-lg font-poppins font-normal text-[16px] outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all"
                  required
                />
              </div>

              {/* Username Input */}
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-brand-red rounded-lg font-poppins font-normal text-[16px] outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-brand-red rounded-lg font-poppins font-normal text-[16px] outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all"
                  required
                />
              </div>

              {/* No. Telp Input */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="No. Telp"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-brand-red rounded-lg font-poppins font-normal text-[16px] outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all"
                  required
                />
              </div>

              {/* Alamat Lengkap Input */}
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Alamat Lengkap"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-brand-red rounded-lg font-poppins font-normal text-[16px] outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Kata Sandi"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-brand-red rounded-lg font-poppins font-normal text-[16px] outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all"
                  required
                />
              </div>

              {/* Confirm Password Input */}
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Konfirmasi Kata Sandi"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-brand-red rounded-lg font-poppins font-normal text-[16px] outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all"
                  required
                />
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-brand-red rounded-lg text-white font-poppins font-semibold text-[18px] hover:opacity-90 transition-opacity mt-2"
              >
                Daftar Sekarang
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-black font-poppins font-normal text-[16px]">
                Sudah punya akun?{' '}
                <Link
                  to="/login"
                  className="text-brand-red font-poppins font-semibold hover:underline"
                >
                  Masuk di sini.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register