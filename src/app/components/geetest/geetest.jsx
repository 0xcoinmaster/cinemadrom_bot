import React from 'react';
import PropTypes from 'prop-types';
import GeeTest from 'react-geetest-v4';

export default function Geetest({ verify, children }) {
  const captchaRef = React.useRef(null);

  return (
    <div>
      <GeeTest
        ref={captchaRef}
        captchaId={process.env.NEXT_PUBLIC_GEETEST_ID}
        product={'bind'}
        onSuccess={verify}
      >
        {children}
      </GeeTest>
    </div>
  );
}

Geetest.propTypes = {
  verify: PropTypes.func,
  children: PropTypes.element.isRequired,
};
