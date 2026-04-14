'use client';
// src/components/WhatsAppWidget.tsx
import { useState } from 'react';

const WA = process.env.NEXT_PUBLIC_WA_NUMBER || '919999999999';

const QUICK_MESSAGES = [
  { label: '🪵 Plywood Pricing',   text: "Hi, I need plywood for my project. Can you share pricing and available sizes?" },
  { label: '🚪 Door Enquiry',       text: "Hi, I'm looking for doors for my home. What options and prices do you have?" },
  { label: '🎨 Laminate Designs',   text: "Hi, I need laminate sheet designs for my kitchen/bedroom. Can you help?" },
  { label: '🔩 Hardware Fittings',  text: "Hi, I need hardware fittings for my furniture. What do you have available?" },
  { label: '📦 Bulk / Wholesale',   text: "Hi, I'm a contractor and need bulk pricing. Can we discuss wholesale rates?" },
  { label: '📍 Showroom Visit',     text: "Hi, I'd like to visit your Karur showroom. What are your working hours?" },
];

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState('');

  const send = (text: string) => {
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      {/* Expandable panel */}
      {open && (
        <div style={{
          position: 'fixed', bottom: 90, right: 28, zIndex: 9998,
          width: 320, background: '#1C140D',
          border: '1px solid rgba(200,136,74,0.2)',
          borderRadius: 16, overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
          animation: 'slideUp 0.25s ease',
        }}>
          {/* Header */}
          <div style={{ background: '#25D366', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 42, height: 42, background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🪵</div>
            <div>
              <div style={{ fontWeight: 700, color: 'white', fontSize: 14 }}>Karur Plywood &amp; Co.</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 6, height: 6, background: 'white', borderRadius: '50%', display: 'inline-block' }}></span>
                Usually replies within minutes
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'white', fontSize: 18, cursor: 'pointer' }}>✕</button>
          </div>

          {/* Chat bubble */}
          <div style={{ padding: '16px 16px 8px' }}>
            <div style={{ background: '#241A10', borderRadius: '4px 12px 12px 12px', padding: '12px 14px', display: 'inline-block', maxWidth: '85%' }}>
              <p style={{ fontSize: 13, color: '#C8B8A0', margin: 0, lineHeight: 1.6 }}>
                👋 Hi! How can we help you today? Choose a topic below or type your own message.
              </p>
              <div style={{ fontSize: 11, color: '#9A8070', marginTop: 6, textAlign: 'right' }}>9:00 AM ✓✓</div>
            </div>
          </div>

          {/* Quick messages */}
          <div style={{ padding: '8px 16px 12px', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {QUICK_MESSAGES.map(m => (
              <button key={m.label} onClick={() => send(m.text)}
                style={{ textAlign: 'left', background: 'rgba(200,136,74,0.08)', border: '1px solid rgba(200,136,74,0.2)', borderRadius: 8, padding: '9px 13px', fontSize: 13, color: '#E0A86A', cursor: 'pointer', fontFamily: 'Outfit,sans-serif', transition: 'all 0.15s' }}>
                {m.label}
              </button>
            ))}
          </div>

          {/* Custom message */}
          <div style={{ padding: '0 12px 12px', display: 'flex', gap: 8 }}>
            <input
              value={custom}
              onChange={e => setCustom(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && custom.trim() && send(custom)}
              placeholder="Type a message..."
              style={{ flex: 1, background: '#0E0B08', border: '1px solid rgba(200,136,74,0.2)', borderRadius: 8, padding: '10px 13px', fontSize: 13, color: '#F0E8DC', fontFamily: 'Outfit,sans-serif', outline: 'none' }}
            />
            <button onClick={() => custom.trim() && send(custom)}
              style={{ width: 40, height: 40, background: '#25D366', border: 'none', borderRadius: 8, fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button onClick={() => setOpen(o => !o)} className="wa-pulse"
        style={{
          position: 'fixed', bottom: 28, right: 28, zIndex: 9999,
          background: '#25D366', color: 'white', border: 'none',
          borderRadius: 50, padding: '14px 22px',
          display: 'flex', alignItems: 'center', gap: 10,
          fontWeight: 700, fontSize: 14, cursor: 'pointer',
          boxShadow: '0 8px 32px rgba(37,211,102,0.4)',
        }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="wa-btn-label">{open ? 'Close' : 'Chat with us'}</span>
      </button>

      <style>{`
        @keyframes slideUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        @media(max-width:768px){ .wa-btn-label{display:none} }
      `}</style>
    </>
  );
}
