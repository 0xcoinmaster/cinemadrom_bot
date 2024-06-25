'use client'

import { usePathname } from 'next/navigation';
import { DefaultIcons } from './defaultIcons';
import { ActiveIcons } from './activeIcons';

const Footer = () => {

    const url = '/';

    return (
        <footer className="w-full flex justify-center">
            <div className="flex justify-between items-center px-6 w-[340px] h-[70px] border-[#F9F9F9] border-2 bg-[#1E1F40] rounded-[25px]">
                {
                    DefaultIcons.map((icon) => {
                      if(icon.path == url) {
                        return (
                          <button className='flex items-center justify-center w-[51px] h-[47px] bg-[#D9D9D9] rounded-[50%]'>
                            <img src={ActiveIcons[url]} />
                          </button>
                        );
                      } else {
                        return (
                          <button>
                            <img src={icon.img} />
                          </button>
                        );
                      }
                    })
                }
            </div>
        </footer>
    );
}

export default Footer;