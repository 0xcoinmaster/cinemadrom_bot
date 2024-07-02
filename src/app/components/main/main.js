'use client'

import Footer from "../shared/footer";

const Main = () => {
  return (
    <main className="flex flex-col justify-center items-center max-w-[432px] mx-auto my-0 text-white py-[5px] mt-[30px]">
      <section className="w-[380px] h-[175px] bg-gradient-to-l from-[#F3B77E] to-[#9D7935] p-[1px] rounded-[15px]">
        <div className="flex flex-col justify-center items-center w-full h-full bg-gradient-to-r from-[#585977] to-[#272735] rounded-[15px]">
          <div className="flex justify-between items-start w-full px-2">
            <div className='flex items-center'>
              <img src="/1.png" />
              <div className='pl-1'>
                <p className='text-[19px] font-semibold'>Hi, Adam Barlow</p>
                <p className='text-[15px] font-[200]'>Welcome Back!</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='bg-[#D9D9D9] border-[#F5A4A4] border-2 p-[5px] rounded-[9px]'>
                <img src="/Rules.png" />
              </div>
              <div className='bg-[#D9D9D9] border-[#A9DD3C] border-2 p-[5px] rounded-[9px]'>
                <img src="/Vector.png" />
              </div>
            </div>
          </div>
          <p className='flex items-start text-[15px] w-full font-medium pl-[57px]'>Total <span className='text-[#E974F3] px-2'>MVH</span> mining Balance:</p>
          <div className='flex justify-between items-center w-full px-3'>
            <div className='flex items-center'>
              <img src="/MVH logo.png" />
              <div className='pl-2'>
                <p className='text-[23px] font-black'>105.75241</p>
                <p className='text-[#F9DC46] text-[15px]'>= $740.25</p>
              </div>
            </div>
            <p className='bg-[#F7C08E] border-[#CB7334] border-2 px-[12px] py-[11px] rounded-[15px] text-black text-[17px] font-medium'>Withdraw</p>
          </div>
        </div>
      </section>
      <section className='w-[380px] flex justify-between pt-[10px]'>
        <img src="/Baner 1.png" />
        <img src="/Baner 2 NFT Movie.png" />
      </section>
      <section className="w-[380px] h-[186px] relative grid mb-2">
        <div className='flex flex-col justify-between items-center z-20 pt-[15px] pb-[10px]'>
          <p className='text-[#F9D61B] text-[18px] font-medium'>100 % Filled in 1 hours</p>
          <div className='flex items-center justify-between w-full px-5'>
            <img src="/MVH logo.png" className='w-[60px] h-[60px]' />
            <p className='font-medium text-[50px] leading-none'>0.01000</p>
            <div className='w-[60px] h-[60px]'></div>
          </div>
          <p className='font-light text-[15px]'>0.01 <span className='text-[#E974F3]'>MVH</span> / 1 hour</p>
          <div className='flex justify-between w-full px-2'>
            <button className='w-[85px] h-[35px] bg-[#F7C08E] border-[#CB7334] border-2 rounded-[15px] font-medium text-[18px] text-black'>Earn</button>
            <button className='w-[150px] h-[35px] bg-[#F7C08E] border-[#CB7334] border-2 rounded-[15px] font-medium text-[18px] text-black'>Claim</button>
            <button className='w-[85px] h-[35px] bg-[#F7C08E] border-[#CB7334] border-2 rounded-[15px] font-medium text-[18px] text-black'>Boost</button>
          </div>
        </div>
        <img src="/Block Minings.png" className='absolute top-0 z-0' />
      </section>
      <section className='w-[380px] h-[170px] bg-gradient-to-r from-[#9DF37E] to-[#15A9BD] p-[1px] rounded-[15px]'>
        <div className='w-full h-full bg-gradient-to-l from-[#667A85] to-[#192A37] rounded-[15px]'>
          <div className='w-full h-full flex justify-between items-center'>
            <div className='flex flex-col justify-between h-full py-3 pl-3'>
              <button className='flex flex-col justify-center items-center text-[15px] font-medium text-black w-[75px] h-[68px] bg-[#F7C4EC] border-[#CB7334] border-2 rounded-[15px]'>
                <img src="/Sale.png" />
                Pre-Sale
              </button>
              <button className='flex flex-col justify-center items-center text-[15px] font-medium text-black w-[75px] h-[68px] bg-[#70DBE2] border-[#3B6D2A] border-2 rounded-[15px]'>
                <img src="/Announce.png" />
                News
              </button>
            </div>
            <img src="/Baner 4.png" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Main;