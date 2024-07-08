import React from 'react';
import GeeTest from 'react-geetest-v4';


export default function Geetest({ verify, children }) {
    const captchaRef = React.useRef(null);

    return (
        <div>
            <GeeTest
                ref={captchaRef}
                captchaId={process.env.NEXT_PUBLIC_GEETEST_ID}
                product={'bind'}
                onSuccess={() => verify()}
            >
                {children}
            </GeeTest>
        </div>
    );
}