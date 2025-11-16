import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Keunggulan from '../components/Keunggulan'
import ProdukTerlaris from '../components/ProdukTerlaris'
import CaraPesan from '../components/CaraPesan'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const HomeAfterLogin = () => {
  return (
    <div className="relative bg-[#9b9b9b] min-h-screen overflow-x-hidden">
      <Header isLoggedIn={true} />
      <Hero />
      <Keunggulan />
      <ProdukTerlaris />
      <CaraPesan />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomeAfterLogin

