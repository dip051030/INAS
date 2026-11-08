import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'International Nepalese Artist Society UK (INAS UK) CIC',
  description: 'A registered Community Interest Company championing Himalayan performing arts, music, and diaspora culture across the United Kingdom.',
  icons: {
    icon: '/images/Logo-Inas-Website-150x150.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans bg-[#fbfcfe] text-[#111827] antialiased selection:bg-[#dfc07a] selection:text-[#070d1e]">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
