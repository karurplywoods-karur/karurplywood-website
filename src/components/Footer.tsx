// src/components/Footer.tsx
import Link from 'next/link';

const WA = process.env.NEXT_PUBLIC_WA_NUMBER || '919999999999';

export default function Footer() {
  return (
    <footer style={{ background: '#161009', borderTop: '1px solid rgba(200,136,74,0.15)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 48px 40px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }}
        className="footer-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 38, height: 38, background: 'linear-gradient(135deg,#C8884A,#8B5E2A)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🪵</div>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, fontSize: 18, color: '#F0E8DC' }}>Karur Plywood</div>
              <div style={{ fontSize: 10, color: '#C8884A', letterSpacing: 2, textTransform: 'uppercase' }}>&amp; Company</div>
            </div>
          </div>
          <p style={{ fontSize: 14, color: '#9A8070', lineHeight: 1.8, maxWidth: 280, marginBottom: 24 }}>
            Karur's most trusted wholesale and retail plywood, doors, laminates and hardware store. 25+ years of quality and service.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            {['📘','📸','▶️'].map(icon => (
              <div key={icon} style={{ width: 36, height: 36, background: '#1C140D', border: '1px solid rgba(200,136,74,0.15)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, cursor: 'pointer' }}>{icon}</div>
            ))}
            <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener"
              style={{ width: 36, height: 36, background: '#1C140D', border: '1px solid rgba(200,136,74,0.15)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, textDecoration: 'none' }}>💬</a>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#C8884A', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 20 }}>Navigation</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[['/', 'Home'], ['/about', 'About Us'], ['/products', 'Products'], ['/blog', 'Blog'], ['/location', 'Location'], ['/contact', 'Contact']].map(([href, label]) => (
              <Link key={href} href={href} style={{ fontSize: 14, color: '#9A8070', textDecoration: 'none' }}>{label}</Link>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#C8884A', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 20 }}>Products</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['Plywood', 'Doors', 'Laminates', 'Hardware'].map(p => (
              <Link key={p} href="/products" style={{ fontSize: 14, color: '#9A8070', textDecoration: 'none' }}>{p}</Link>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#C8884A', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 20 }}>Contact Us</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ fontSize: 14, color: '#9A8070' }}>📞 +91 99999 99999</span>
            <span style={{ fontSize: 14, color: '#9A8070' }}>📍 Karur, Tamil Nadu</span>
            <span style={{ fontSize: 14, color: '#9A8070' }}>⏰ Mon–Sat: 9AM–7PM</span>
            <a href={`https://wa.me/${WA}?text=Hi`} target="_blank" rel="noopener"
              style={{ fontSize: 14, color: '#25D366', textDecoration: 'none' }}>💬 WhatsApp Us</a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(200,136,74,0.1)', padding: '20px 48px', maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontSize: 13, color: '#9A8070' }}>© 2025 Karur Plywood and Company. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 20 }}>
          {['Privacy Policy', 'Sitemap'].map(t => (
            <span key={t} style={{ fontSize: 12, color: '#9A8070', cursor: 'pointer' }}>{t}</span>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .footer-grid{ grid-template-columns:1fr !important; padding:40px 20px !important; gap:28px !important; }
        }
      `}</style>
    </footer>
  );
}
