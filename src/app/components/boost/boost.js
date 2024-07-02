'use client'

import Footer from "../shared/footer";

const Boost = () => {
  return (
    <main className="flex flex-col justify-center items-center max-w-[432px] mx-auto my-0 text-white py-[5px] mt-[30px]">
      <h3 className="text-white text-[35px] font-medium">Boost</h3>
      <section className="flex items-center mb-5 w-full ml-[50px]">
        <img src="/MVH logo.png" className="w-[90px] h-[90px] mr-3" />
        <div className="flex flex-col">
          <p className="text-[#F9D61B] text-[18px] font-medium ml-5">Your Balance</p>
          <p className="text-[45px] font-medium">105.75241</p>
          <p className="text-[15px] font-medium ml-5">0.01 <span className="text-[#E974F3]">MVH</span> / 1 hour</p>
        </div>
      </section>
      <section className="w-[380px] h-[120px] bg-gradient-to-r from-[#1DB89C] to-[#D5F223] p-[1px] rounded-[20px] mb-2">
        <div className="flex justify-between items-center w-full h-full bg-[#352F4D] rounded-[20px] px-4">
          <img src="/Timing.png" className="w-[63px] h-[90px] "/>
          <div className="flex flex-col">
            <p className="text-[#F5D62F] text-[28px] font-medium">Mining Time</p>
            <p className="text-[15px] font-medium">Increase the mining time:</p>
            <div className="flex items-center">
              <img src="/MVH logo.png" className="w-[40px] h-[40px] mr-2" />
              <p className="text-[14px] font-medium">L1 - 6 hour / 7 days</p>
            </div>
          </div>
          <img src="/Layer 2.png" />
        </div>
      </section>
      <section className="w-[380px] h-[120px] bg-gradient-to-r from-[#1D77B8] to-[#23F2C0] p-[1px] rounded-[20px] mb-2">
        <div className="flex justify-between items-center w-full h-full bg-[#352F4D] rounded-[20px] px-4">
          <img src="/Timing.png" className="w-[63px] h-[90px] "/>
          <div className="flex flex-col">
            <p className="text-[#2FD2F5] text-[28px] font-medium">Mining Time</p>
            <p className="text-[15px] font-medium">Increase the mining time:</p>
            <div className="flex items-center">
              <img src="/MVH logo.png" className="w-[40px] h-[40px] mr-2" />
              <p className="text-[14px] font-medium">L2 - 12 hour / 7 days</p>
            </div>
          </div>
          <img src="/Layer 2.png" />
        </div>
      </section>
      <section className="w-[380px] h-[120px] bg-gradient-to-r from-[#F51A1A] to-[#B807C7] p-[1px] rounded-[20px] mb-2">
        <div className="flex justify-between items-center w-full h-full bg-[#352F4D] rounded-[20px] px-4">
          <img src="/Power.png" className="w-[83px] h-[83px] "/>
          <div className="flex flex-col">
            <p className="text-[#F766C6] text-[28px] font-medium">Mining Power</p>
            <p className="text-[15px] font-medium">Increase mining power:</p>
            <div className="flex items-center">
              <img src="/MVH logo.png" className="w-[40px] h-[40px] mr-2" />
              <p className="text-[14px] font-medium">L3 - 0.04 MVH / hour</p>
            </div>
          </div>
          <img src="/Layer 2.png" />
        </div>
      </section>
      <section className="w-[380px] h-[120px] bg-gradient-to-r from-[#0B07C7] to-[#F51A35] p-[1px] rounded-[20px]">
        <div className="flex justify-between items-center w-full h-full bg-[#352F4D] rounded-[20px] px-4">
          <img src="/MVH logo.png" className="w-[60px] h-[60px] "/>
          <div className="flex flex-col">
            <p className="text-[#1DE0D4] text-[28px] font-medium text-center">Missions</p>
            <p className="text-[13px] font-medium">Complete Missions and get MVH</p>
          </div>
          <img src="/Layer 2.png" />
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Boost;