
import "./globals.css";
import localFont from 'next/font/local';

const font = localFont({ src: '../resources/fonts/Poppins-Light.woff2'});

export const metadata = {
  title: `Agencja interaktywna Kryptonum`,
  siteUrl: `https://kryptonum.eu`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex"></meta>
      </head>
        <body className={font.className}>{children}</body>
    </html>
  );
}
