'use client';
// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const WA = process.env.NEXT_PUBLIC_WA_NUMBER || '919999999999';

const navLinks = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/blog',     label: 'Blog' },
  { href: '/location', label: 'Location' },
  { href: '/contact',  label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isAdmin = pathname.startsWith('/admin');
  if (isAdmin) return null;

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          height: '70px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 48px',
          background: scrolled ? 'rgba(14,11,8,0.98)' : 'rgba(14,11,8,0.92)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(200,136,74,0.15)',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
          transition: 'all 0.3s',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <div style={{
            width: 38, height: 38,
            background: 'linear-gradient(135deg, #C8884A, #8B5E2A)',
            borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
          }}>🪵</div>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 18, color: '#F0E8DC', lineHeight: 1.2 }}>
              Karur Plywood
            </div>
            <div style={{ fontSize: 10, color: '#C8884A', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 500 }}>
              &amp; Company
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: 4, listStyle: 'none', margin: 0 }}
          className="hidden-mobile">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} style={{
                fontSize: 13, fontWeight: 500, padding: '7px 14px', borderRadius: 6,
                color: pathname === href ? '#E0A86A' : '#9A8070',
                background: pathname === href ? 'rgba(200,136,74,0.1)' : 'transparent',
                textDecoration: 'none', transition: 'all 0.2s',
              }}>{label}</Link>
            </li>
          ))}
          <li>
            <a href={`https://wa.me/${WA}?text=Hi%2C+I%27m+interested+in+your+products.`}
              target="_blank" rel="noopener"
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                background: '#25D366', color: 'white',
                padding: '8px 18px', borderRadius: 8,
                fontSize: 13, fontWeight: 700, textDecoration: 'none',
              }}>
              💬 WhatsApp
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(o => !o)}
          className="show-mobile"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, display: 'none' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {[0,1,2].map(i => (
              <span key={i} style={{ width: 24, height: 2, background: '#E0A86A', borderRadius: 2, display: 'block',
                transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px,5px)' :
                           menuOpen && i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1, transition: 'all 0.3s' }}/>
            ))}
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 70, left: 0, right: 0, zIndex: 999,
          background: 'rgba(14,11,8,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(200,136,74,0.15)',
          padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{
              padding: '12px 16px', borderRadius: 8, fontSize: 15, fontWeight: 500,
              color: pathname === href ? '#E0A86A' : '#C8B8A0',
              background: pathname === href ? 'rgba(200,136,74,0.1)' : 'transparent',
              textDecoration: 'none',
            }}>{label}</Link>
          ))}
          <a href={`https://wa.me/${WA}?text=Hi`} target="_blank" rel="noopener"
            style={{ padding: '12px 16px', borderRadius: 8, fontSize: 15, fontWeight: 700, color: '#25D366', textDecoration: 'none', marginTop: 8 }}>
            💬 Chat on WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        nav { padding: 0 48px; }
        @media (max-width: 768px) { nav { padding: 0 20px !important; } }
      `}</style>
    </>
  );
}
