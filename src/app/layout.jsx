import { Suspense } from 'react';
import Loading from './components/loading/loading';
import { RouterProvider } from './components/providers/routerProvider';
import PropTypes from 'prop-types';
import './globals.css';

export const metadata = {
  title: 'Cinemadrom',
  description: 'Cinemadrom telegram bot',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <RouterProvider>
        <Suspense fallback={<Loading />}>
          <body className="bg-[#0E0729]">{children}</body>
        </Suspense>
      </RouterProvider>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
