
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `Kryptonum`,
  siteUrl: `https://kryptonum.eu`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex"></meta>
      </head>
        <body className={inter.className}>{children}</body>
    </html>
  );
}
