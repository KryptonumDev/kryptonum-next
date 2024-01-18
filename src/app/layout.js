import '@/global/global.scss'
import localFont from 'next/font/local';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import OrganizationSchema from '@/global/OrganizationSchema';
import Fathom from '@/utils/Fathom';

const Poppins = localFont({
  src: [
    {
      path: '../assets/fonts/Poppins-Light.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  fallback: ['sans-serif'],
});

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <OrganizationSchema />
      </head>
      <body className={`${Poppins.className}`}>
        <Header />
        {children}
        <Footer />
        <Fathom />
      </body>
    </html>
  );
};

export default RootLayout;