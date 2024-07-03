'use client'

import Footer from "../shared/footer";
import Image from "next/image";
import { useRouterContext } from "../providers/routerProvider";

const Account = () => {

  const { router } = useRouterContext();

  return (
    <main className="max-w-[432px] mx-auto my-0 text-white py-[5px] mt-[30px]">
      <div className={`${router == '/account' ? 'animate-fadeEffect' : ''} flex flex-col justify-center items-center `}>
        <h3 className="text-white text-[35px] font-medium mb-1">Your Account</h3>
        <Footer />
      </div>
    </main>
  )
}

export default Account;