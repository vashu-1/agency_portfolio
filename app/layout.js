import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import CustomCursor from './components/CustomCursor';
import { CursorProvider } from './context/CursorContext';
import AOSInit from './components/AOSInit';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'AgencyPro',
  description: 'Turning your ideas into a digital reality.',
  keywords: [
    'AgencyPro',
    'Web development',
    'website',
    'ecommerce',
    'SEO website',
    'Agency',
    'Branding',
    'UI/UX design',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorProvider>
          <AOSInit />
          <CustomCursor />
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}
