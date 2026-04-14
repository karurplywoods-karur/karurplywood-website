'use client';
// src/components/Gallery.tsx
import { useState } from 'react';
import Image from 'next/image';

interface GalleryItem { id: number; title: string; category: string; image_url: string; }
interface Props { items: GalleryItem[]; }

const CATS = ['all', 'plywood', 'doors', 'laminates', 'hardware', 'showroom'];

export default function Gallery({ items }: Props) {
  const [active, setActive] = useState('all');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = active === 'all' ? items : items.filter(i => i.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
        {CATS.map(c => (
          <button key={c} onClick={() => setActive(c)}
            style={{
              padding: '7px 18px', borderRadius: 20, border: '1px solid',
              borderColor: active === c ? '#C8884A' : 'rgba(200,136,74,0.2)',
              background: active === c ? 'rgba(200,136,74,0.15)' : 'transparent',
              color: active === c ? '#E0A86A' : '#9A8070',
              fontSize: 13, fontWeight: 600, cursor: 'pointer',
              fontFamily: 'Outfit,sans-serif', textTransform: 'capitalize',
              transition: 'all 0.2s',
            }}>
            {c === 'all' ? '🏷️ All' : c === 'plywood' ? '🪵 Plywood' : c === 'doors' ? '🚪 Doors' : c === 'laminates' ? '🎨 Laminates' : c === 'hardware' ? '🔩 Hardware' : '🏪 Showroom'}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
        {filtered.map(item => (
          <div key={item.id} onClick={() => setLightbox(item)}
            style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(200,136,74,0.15)', cursor: 'pointer', background: '#1C140D', transition: 'all 0.25s' }}
            className="card-lift">
            <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
              <Image src={item.image_url} alt={item.title || ''} fill style={{ objectFit: 'cover', transition: 'transform 0.4s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
            </div>
            {item.title && (
              <div style={{ padding: '12px 16px' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#F0E8DC' }}>{item.title}</div>
                <div style={{ fontSize: 11, color: '#9A8070', textTransform: 'capitalize', marginTop: 2 }}>{item.category}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 0', color: '#9A8070' }}>
          No images in this category yet.
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, cursor: 'zoom-out' }}>
          <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: 800, width: '100%', borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: 500 }}>
              <Image src={lightbox.image_url} alt={lightbox.title || ''} fill style={{ objectFit: 'cover' }} />
            </div>
            {lightbox.title && (
              <div style={{ background: '#1C140D', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 600, color: '#F0E8DC' }}>{lightbox.title}</div>
                  <div style={{ fontSize: 12, color: '#9A8070', textTransform: 'capitalize' }}>{lightbox.category}</div>
                </div>
                <button onClick={() => setLightbox(null)} style={{ background: 'none', border: '1px solid rgba(200,136,74,0.3)', color: '#E0A86A', borderRadius: 8, padding: '6px 14px', cursor: 'pointer', fontSize: 13 }}>✕ Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
