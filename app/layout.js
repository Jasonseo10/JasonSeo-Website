import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Jason Seo',
  description: 'Software developer portfolio of Jason Seo',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
