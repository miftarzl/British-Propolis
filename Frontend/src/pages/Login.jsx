import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bgLogin from '../assets/images/bg-login.jpeg'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login:', formData)
    // Navigate to home after login
    navigate('/home')
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
              Selamat Datang Kembali!
            </h1>
            <p className="text-white font-poppins font-normal text-[18px] max-w-2xl">
              Kelola pesanan, pantau stok, dan nikmati kemudahan berbelanja produk kesehatan original kami hanya dengan satu akun.
            </p>
          </div>

          {/* Login Form */}
          <div className="w-full max-w-[500px] bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-brand-red font-poppins font-bold text-[28px] mb-6 text-center">
              Masuk Akun
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username/Email Input */}
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username / Email"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-brand-red rounded-lg font-poppins font-normal text-[16px] outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 transition-all"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-black font-poppins font-normal text-[14px]">
                    Kata Sandi
                  </label>
                  <Link
                    to="/lupa-password"
                    className="text-brand-red font-poppins font-normal text-[14px] hover:underline"
                  >
                    Lupa kata sandi?
                  </Link>
                </div>
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

              {/* Login Button */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-brand-red rounded-lg text-white font-poppins font-semibold text-[18px] hover:opacity-90 transition-opacity"
              >
                Masuk
              </button>
            </form>

            {/* Register Link */}
            <div className="mt-6 text-center">
              <p className="text-black font-poppins font-normal text-[16px]">
                Belum punya akun?{' '}
                <Link
                  to="/register"
                  className="text-brand-red font-poppins font-semibold hover:underline"
                >
                  Daftar di sini.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

