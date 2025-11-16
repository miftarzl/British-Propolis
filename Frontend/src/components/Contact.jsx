import React from 'react'
import rect40 from '../assets/images/rectangle-400.png'
import whatsappIcon from '../assets/images/whats-app0.png'
import emailIcon from '../assets/images/email0.png'
import instagramIcon from '../assets/images/instagram0.png'

const Contact = () => {
  return (
    <section className="relative w-full h-[390px] bg-gradient-to-b from-white via-[#e9808c] to-brand-red">
      <div className="relative w-full h-full max-w-[1920px] mx-auto">
        <img
          src={rect40}
          alt=""
          className="absolute left-[160px] top-0 w-[510px] h-full object-cover"
        />

        <div className="absolute right-[150px] top-[40px] w-[820px]">
          <h2 className="text-brand-red font-poppins font-bold text-[48px] mb-5" style={{ WebkitTextStroke: '1px #fff' }}>
            Tetap Terhubung dengan Kami
          </h2>
          <p className="text-white font-poppins font-normal text-[24px] mb-2">
            Kami senang bisa lebih dekat denganmu
          </p>
          <p className="text-white font-poppins font-normal text-[16px] mb-10">
            Hubungi kami untuk konsultasi produk, pemesanan, atau kerja sama.
          </p>

          <div className="flex gap-10">
            <a href="https://wa.me/08123456789" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="WhatsApp" className="w-[60px] h-[60px] hover:opacity-80 transition-opacity" />
            </a>
            <a href="mailto:support@dantepropolis.com">
              <img src={emailIcon} alt="Email" className="w-[60px] h-[60px] hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://instagram.com/dantepropolis" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="w-[60px] h-[60px] hover:opacity-80 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

