import React from 'react'
import rect14 from '../assets/images/rectangle-140.png'
import rect12 from '../assets/images/rectangle-120.png'
import rect13 from '../assets/images/rectangle-130.png'
import beeSwarm from '../assets/images/bee-swarm0.png'

const Keunggulan = () => {
  return (
    <section className="relative w-full h-[590px] bg-brand-red">
      <div className="relative w-full h-full max-w-[1920px] mx-auto">
        {/* Title */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[70px] text-center">
          <p className="text-white font-poppins text-[55px] font-normal">
            Selamat Datang di
          </p>
          <h2 className="text-white font-racing text-[48px] font-normal mt-2">
            DANTE PROPOLIS
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-[270px] h-0 border-t border-white"></div>
            <img src={beeSwarm} alt="" className="w-10 h-10" />
            <div className="w-[270px] h-0 border-t border-white"></div>
          </div>
        </div>

        {/* Features */}
        <div className="absolute top-[260px]">
          <div className="absolute left-[217px] flex flex-col items-center">
            <img src={rect14} alt="" className="w-[200px] h-[200px] object-cover" />
            <p className="text-white font-poppins font-medium text-[30px] mt-5 text-center w-[317px] h-[39px] flex items-center justify-center">
              Distributor Resmi
            </p>
          </div>
          <div className="absolute left-[869px] flex flex-col items-center">
            <img src={rect12} alt="" className="w-[200px] h-[200px] object-cover" />
            <p className="text-white font-poppins font-medium text-[30px] mt-5 text-center w-[317px] h-[39px] flex items-center justify-center">
              Produk Berkualitas
            </p>
          </div>
          <div className="absolute left-[1510px] flex flex-col items-center">
            <img src={rect13} alt="" className="w-[200px] h-[200px] object-cover" />
            <p className="text-white font-poppins font-medium text-[30px] mt-5 text-center w-[317px] h-[39px] flex items-center justify-center">
              Layanan Terpercaya
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Keunggulan

