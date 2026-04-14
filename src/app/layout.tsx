// src/app/layout.tsx
import type { Metadata } from 'next';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Karur Plywood & Company | Best Plywood Dealer in Karur, Tamil Nadu',
    template: '%s | Karur Plywood & Company',
  },
  description: "Karur's most trusted wholesale & retail plywood shop. Premium plywood, doors, laminates & hardware. Get instant WhatsApp quote. 25+ years of trust.",
  keywords: ['plywood shop Karur', 'best plywood dealer Karur', 'doors laminates Karur', 'hardware shop Karur', 'wholesale plywood Tamil Nadu'],
  openGraph: {
    title: 'Karur Plywood & Company',
    description: "Karur's most trusted plywood, doors, laminates & hardware store.",
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
