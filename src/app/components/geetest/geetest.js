import React from 'react';
import GeeTest from 'react-geetest-v4';
import { useRouterContext } from '../providers/routerProvider';

export default function Geetest() {
    const captchaRef = React.useRef(null);

    const { setCaptcha } = useRouterContext();

    return (
        <div className='flex flex-col justify-end items-center h-[100vh]'>
            <GeeTest
                ref={captchaRef}
                captchaId={'617daf72146bd4694b17b3bd20597e33'}
                product={'bind'}
                onSuccess={() => setCaptcha(true)}
            >
                <div className='flex justify-center items-center w-full mb-10'>
                    <button className='text-white text-3xl'>Verify you human</button>
                </div>
            </GeeTest>
        </div>
    );
}