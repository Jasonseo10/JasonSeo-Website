import './globals.css';
import Navbar from './components/Navbar';
import { Josefin_Sans } from 'next/font/google';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-josefin',
});

export const metadata = {
  title: 'Jason Seo',
  description: 'Software developer portfolio of Jason Seo',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <Navbar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
