import { Suspense } from 'react';
import Loading from "./components/loading/loading";
import Footer from './components/shared/footer';
import "./globals.css";


export const metadata = {
  title: "Create Next App",
  description: "aaa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body className='bg-[#0E0729]'>
          {children}
          <Footer />
        </body>
      </Suspense>
    </html>
  );
}
