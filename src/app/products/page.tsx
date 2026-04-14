// src/app/products/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { getDb } from '@/lib/db';
import Gallery from '@/components/Gallery';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'Products | Plywood, Doors, Laminates & Hardware in Karur',
  description: 'Buy top-quality plywood, doors, laminates and hardware at best prices in Karur. BWR, MR, commercial grades. Wholesale & retail. WhatsApp for quick pricing.',
};

const WA = process.env.NEXT_PUBLIC_WA_NUMBER || '919999999999';

function getGallery() {
  try {
    const db = getDb();
    return db.prepare(`SELECT * FROM gallery ORDER BY sort_order ASC`).all() as any[];
  } catch { return []; }
}

const PRODUCTS = [
  {
    id: 'plywood', icon: '🪵', name: 'Plywood', bg: 'linear-gradient(135deg,#2A1A08,#1a1006)',
    intro: 'We stock the widest range of plywood in Karur — from basic commercial grade to high-end marine and film-faced varieties. All products are ISI-marked, genuinely branded and available in multiple thickness options from 4mm to 25mm.',
    waText: 'Hi%2C+I+need+plywood+pricing+and+availability.+Can+you+help%3F',
    items: [
      { emoji:'🏆', name:'BWR Grade Plywood', desc:'Boiling Water Resistant plywood — ideal for kitchens, bathrooms and humid areas. IS:303 certified.', tags:['IS:303 Certified','4mm – 25mm','8×4 ft Standard'], wa:'Hi%2C+I+need+BWR+plywood+pricing.' },
      { emoji:'🪵', name:'MR Grade Plywood', desc:'Moisture Resistant plywood for interior furniture, wardrobes and wall paneling. Best value for interior use.', tags:['IS:303 Certified','6mm – 19mm','Furniture Grade'], wa:'Hi%2C+I+need+MR+plywood+pricing.' },
      { emoji:'🏗️', name:'Commercial Plywood', desc:'Economical plywood for shuttering, packing and construction. Available in large quantities for bulk orders.', tags:['Bulk Available','6mm – 25mm','Construction Use'], wa:'Hi%2C+I+need+commercial+plywood+in+bulk.' },
      { emoji:'⚓', name:'Marine Plywood', desc:'Fully waterproof plywood for external use and areas with direct water contact. IS:710 certified.', tags:['IS:710 Certified','Fully Waterproof','External Use'], wa:'Hi%2C+I+need+marine+plywood.' },
      { emoji:'🎬', name:'Film-Faced Plywood', desc:'Smooth film-coated shuttering plywood for concrete formwork. Reusable multiple times.', tags:['Reusable','Formwork','12mm – 18mm'], wa:'Hi%2C+I+need+film+faced+plywood.' },
      { emoji:'🧱', name:'Block Board', desc:'Solid wood core block board for doors, shelves and tables where rigidity and flatness are critical.', tags:['Solid Core','19mm – 25mm','Door/Shelf Use'], wa:'Hi%2C+I+need+block+board.' },
    ],
  },
  {
    id: 'doors', icon: '🚪', name: 'Doors', bg: 'linear-gradient(135deg,#0D2020,#081515)',
    intro: 'We stock a comprehensive range of interior and exterior doors suitable for homes, apartments and commercial spaces. Standard sizes and custom orders available.',
    waText: 'Hi%2C+I%27m+looking+for+doors+for+my+home.+What+options+do+you+have%3F',
    items: [
      { emoji:'🚪', name:'Flush Doors (Solid)', desc:'Solid core flush doors for main entrance and heavy-duty interior use. Strong, durable and long-lasting.', tags:['Solid Core','Teak/Gurjan Face','Custom Sizes'], wa:'Hi%2C+I+need+solid+flush+doors+pricing.' },
      { emoji:'🪟', name:'Flush Doors (Hollow)', desc:'Lightweight hollow core flush doors for bedrooms and bathrooms. Economical option without compromising appearance.', tags:['Lightweight','Economical','Bedroom Use'], wa:'Hi%2C+I+need+hollow+flush+door+pricing.' },
      { emoji:'🏛️', name:'Moulded Doors', desc:'Elegant pre-finished moulded skin doors with decorative panel patterns. Ready to paint or polish.', tags:['Pre-moulded Skin','Decorative','Ready to Finish'], wa:'Hi%2C+I+need+moulded+door+pricing.' },
      { emoji:'💧', name:'PVC Doors', desc:'Fully waterproof PVC doors — best choice for bathrooms and wet areas. Termite-proof and zero maintenance.', tags:['100% Waterproof','Termite-proof','Bathroom Use'], wa:'Hi%2C+I+need+PVC+door+pricing.' },
    ],
  },
  {
    id: 'laminates', icon: '🎨', name: 'Laminates', bg: 'linear-gradient(135deg,#1A1A0D,#101008)',
    intro: 'Over 100 laminate designs available across all finishes. Whether you\'re renovating your kitchen, bedroom wardrobe or commercial furniture — we have the right laminate for you.',
    waText: 'Hi%2C+I%27m+looking+for+laminate+designs+for+my+furniture.',
    items: [
      { emoji:'✨', name:'High Gloss Laminates', desc:'Mirror-finish glossy laminates that reflect light beautifully. Perfect for kitchen shutters and modern furniture.', tags:['Mirror Finish','Kitchen Use','Merino · Greenlam'], wa:'Hi%2C+I+need+high+gloss+laminate+designs.' },
      { emoji:'🖤', name:'Matt Finish Laminates', desc:'Sophisticated non-reflective matt laminates. Hides fingerprints — ideal for high-usage furniture.', tags:['Anti-fingerprint','Modern Look','Low Maintenance'], wa:'Hi%2C+I+need+matt+finish+laminate+options.' },
      { emoji:'🌿', name:'Wood Texture Laminates', desc:'Realistic wood grain textured laminates. Available in teak, oak, walnut and more styles.', tags:['Wood Grain','Teak · Oak · Walnut','Natural Look'], wa:'Hi%2C+I+need+wood+texture+laminates.' },
      { emoji:'🎨', name:'Digital Print Laminates', desc:'Custom digital-print laminates with unique patterns, marble effects and designer finishes.', tags:['Custom Prints','Marble Effect','Unique Designs'], wa:'Hi%2C+I+need+digital+print+laminates.' },
    ],
  },
  {
    id: 'hardware', icon: '🔩', name: 'Hardware', bg: 'linear-gradient(135deg,#1A0D1A,#100810)',
    intro: 'Complete range of premium-grade furniture and door hardware. SS304 stainless steel products available for long-lasting performance in all conditions.',
    waText: 'Hi%2C+I+need+hardware+fittings+for+my+furniture.',
    items: [
      { emoji:'🔗', name:'Hinges & Handles', desc:'SS304 heavy-duty hinges, concealed hinges, soft-close hinges and designer handles for all furniture types.', tags:['SS304 Grade','Soft-close Options','Concealed'], wa:'Hi%2C+I+need+hinges+and+handles+pricing.' },
      { emoji:'🔒', name:'Locks & Latches', desc:'Deadbolt locks, mortice locks, cabin hooks, door stoppers and magnetic catches.', tags:['Mortice Locks','Deadbolt','Magnetic Catches'], wa:'Hi%2C+I+need+locks+pricing.' },
      { emoji:'📦', name:'Drawer Systems', desc:'Ball-bearing drawer channels, tandem box systems and soft-close undermount slides.', tags:['Soft-close','Ball Bearing','Undermount'], wa:'Hi%2C+I+need+drawer+channel+pricing.' },
    ],
  },
];

const FAQS = [
  ['What is the difference between BWR and MR grade plywood?', 'BWR (Boiling Water Resistant) plywood is fully moisture-resistant and ideal for kitchens, bathrooms and humid areas. MR (Moisture Resistant) plywood resists light moisture only and is best suited for interior furniture like wardrobes and bedroom cabinets. For kitchens and bathrooms, always use BWR.'],
  ['Do you offer wholesale pricing for contractors and builders?', 'Yes, absolutely. We offer special wholesale rates for contractors, carpenters, interior designers and builders who buy in bulk. Please WhatsApp or call us with your requirements and we\'ll give you a custom quote based on quantity.'],
  ['What plywood thickness should I use for kitchen furniture?', 'For kitchen cabinets and shutters, we recommend 18mm BWR grade plywood for the carcass (body) and 12mm for shelves. For the bottom, 19mm or 25mm is preferred for strength. Our team can guide you based on your specific design.'],
  ['Do you deliver outside Karur?', 'Yes, we deliver to Trichy, Namakkal, Erode and nearby districts. Delivery charges may apply based on quantity and distance. WhatsApp us with your location and order details for a delivery quote.'],
  ['How do I identify genuine ISI-certified plywood?', 'Genuine ISI-marked plywood has a BIS stamp printed on the sheet, along with the licence number and manufacturer details. At Karur Plywood, we source only from authorised dealers of CenturyPly, Greenply and other reputed brands.'],
];

export default function ProductsPage() {
  const gallery = getGallery();

  return (
    <>
      {/* Hero */}
      <section style={{ background:'linear-gradient(135deg,#1C140D,#161009)',borderBottom:'1px solid rgba(200,136,74,0.15)',padding:'70px 0',textAlign:'center' }}>
        <div style={{ maxWidth:700,margin:'0 auto',padding:'0 24px' }}>
          <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:11,fontWeight:600,letterSpacing:3,textTransform:'uppercase',color:'#C8884A',marginBottom:14 }}>
            <span style={{ width:24,height:1,background:'#C8884A',display:'inline-block' }}></span>Our Products
          </div>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(40px,5vw,60px)',fontWeight:700,color:'#F0E8DC',lineHeight:1.1,marginBottom:14 }}>
            Premium <span style={{ color:'#E0A86A' }}>Building Materials</span>
          </h1>
          <p style={{ fontSize:16,color:'#9A8070',marginBottom:28 }}>Wholesale &amp; Retail | ISI Certified | All Major Brands | Karur's Widest Selection</p>
          <div style={{ display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap' }}>
            <a href={`https://wa.me/${WA}?text=Hi%2C+I+need+a+price+list+for+your+products.`} target="_blank" rel="noopener"
              style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'13px 24px',borderRadius:8,background:'#25D366',color:'white',fontWeight:700,fontSize:14,textDecoration:'none' }}>
              💬 Get Price List on WhatsApp
            </a>
            <a href="tel:+919999999999"
              style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'13px 24px',borderRadius:8,background:'transparent',color:'#F0E8DC',fontWeight:600,fontSize:14,textDecoration:'none',border:'1px solid rgba(200,136,74,0.3)' }}>
              📞 Call for Bulk Quote
            </a>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <div style={{ maxWidth:1200,margin:'0 auto',padding:'80px 48px' }}>
        {PRODUCTS.map((cat, ci) => (
          <div key={cat.id} id={cat.id} style={{ marginBottom: ci < PRODUCTS.length-1 ? 96 : 0 }}>
            <div style={{ display:'flex',alignItems:'flex-start',justifyContent:'space-between',marginBottom:32,flexWrap:'wrap',gap:16 }}>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(32px,4vw,48px)',fontWeight:700,color:'#F0E8DC',display:'flex',alignItems:'center',gap:16 }}>
                <div style={{ width:56,height:56,background:'linear-gradient(135deg,rgba(200,136,74,0.2),rgba(139,94,42,0.1))',border:'1px solid rgba(200,136,74,0.3)',borderRadius:14,display:'flex',alignItems:'center',justifyContent:'center',fontSize:26,flexShrink:0 }}>{cat.icon}</div>
                {cat.name}
              </h2>
              <a href={`https://wa.me/${WA}?text=${cat.waText}`} target="_blank" rel="noopener"
                style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'11px 20px',borderRadius:8,background:'#25D366',color:'white',fontWeight:700,fontSize:13,textDecoration:'none' }}>
                💬 Enquire on WhatsApp
              </a>
            </div>
            <p style={{ fontSize:15,color:'#9A8070',lineHeight:1.85,maxWidth:680,marginBottom:32 }}>{cat.intro}</p>
            <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20 }} className="items-grid">
              {cat.items.map(item => (
                <div key={item.name} style={{ background:'#1C140D',border:'1px solid rgba(200,136,74,0.15)',borderRadius:14,padding:24 }} className="card-lift">
                  <span style={{ fontSize:36,marginBottom:14,display:'block' }}>{item.emoji}</span>
                  <div style={{ fontWeight:700,fontSize:16,color:'#F0E8DC',marginBottom:6 }}>{item.name}</div>
                  <div style={{ fontSize:13,color:'#9A8070',lineHeight:1.7,marginBottom:14 }}>{item.desc}</div>
                  <div style={{ display:'flex',flexWrap:'wrap',gap:6,marginBottom:16 }}>
                    {item.tags.map(t => <span key={t} style={{ fontSize:11,background:'rgba(200,136,74,0.1)',color:'#C8884A',padding:'3px 10px',borderRadius:20,border:'1px solid rgba(200,136,74,0.15)',fontWeight:500 }}>{t}</span>)}
                  </div>
                  <a href={`https://wa.me/${WA}?text=${item.wa}`} target="_blank" rel="noopener"
                    style={{ display:'inline-flex',alignItems:'center',gap:6,padding:'9px 16px',borderRadius:8,background:'#25D366',color:'white',fontWeight:600,fontSize:13,textDecoration:'none' }}>
                    💬 Get Price
                  </a>
                </div>
              ))}
            </div>
            {ci < PRODUCTS.length-1 && <div style={{ marginTop:72,height:1,background:'linear-gradient(90deg,transparent,rgba(200,136,74,0.2),transparent)' }}/>}
          </div>
        ))}

        {/* Gallery */}
        {gallery.length > 0 && (
          <div style={{ marginTop:96 }}>
            <div style={{ marginBottom:36 }}>
              <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:11,fontWeight:600,letterSpacing:3,textTransform:'uppercase',color:'#C8884A',marginBottom:12 }}>
                <span style={{ width:24,height:1,background:'#C8884A',display:'inline-block' }}></span>Product Gallery
              </div>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(28px,3.5vw,40px)',fontWeight:700,color:'#F0E8DC' }}>See Our <span style={{ color:'#E0A86A' }}>Products</span></h2>
            </div>
            <Gallery items={gallery} />
          </div>
        )}

        {/* FAQ */}
        <div style={{ marginTop:96 }}>
          <div style={{ marginBottom:40 }}>
            <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:11,fontWeight:600,letterSpacing:3,textTransform:'uppercase',color:'#C8884A',marginBottom:12 }}>
              <span style={{ width:24,height:1,background:'#C8884A',display:'inline-block' }}></span>Common Questions
            </div>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(28px,3.5vw,40px)',fontWeight:700,color:'#F0E8DC' }}>
              Frequently Asked <span style={{ color:'#E0A86A' }}>Questions</span>
            </h2>
          </div>
          <div style={{ maxWidth:800 }}>
            {FAQS.map(([q,a],i) => <FaqItem key={i} q={q} a={a} />)}
          </div>
        </div>

        {/* Enquiry form */}
        <div style={{ marginTop:96,background:'#1C140D',border:'1px solid rgba(200,136,74,0.15)',borderRadius:24,padding:48 }}>
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'start' }} className="enq-grid">
            <div>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(28px,3.5vw,40px)',fontWeight:700,color:'#F0E8DC',lineHeight:1.1,marginBottom:14 }}>
                Need a <span style={{ color:'#E0A86A' }}>Custom Quote?</span>
              </h2>
              <p style={{ fontSize:15,color:'#9A8070',lineHeight:1.8 }}>Tell us your requirements and we'll get back to you on WhatsApp with pricing, availability and expert recommendations.</p>
            </div>
            <EnquiryForm compact />
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .items-grid{grid-template-columns:1fr!important}
          .enq-grid{grid-template-columns:1fr!important}
          div[style*="padding: 80px 48px"]{padding:48px 20px!important}
        }
        @media(max-width:1024px){
          .items-grid{grid-template-columns:repeat(2,1fr)!important}
        }
      `}</style>
    </>
  );
}

// FAQ accordion — inline client component via 'use client' trick using details/summary
function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details style={{ background:'#1C140D',border:'1px solid rgba(200,136,74,0.15)',borderRadius:12,marginBottom:10,overflow:'hidden' }}>
      <summary style={{ padding:'18px 24px',cursor:'pointer',fontSize:15,fontWeight:600,color:'#F0E8DC',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center',gap:16 }}>
        {q}
        <span style={{ width:28,height:28,background:'rgba(200,136,74,0.1)',borderRadius:6,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:13,color:'#C8884A' }}>▼</span>
      </summary>
      <div style={{ padding:'0 24px 20px',fontSize:14,color:'#9A8070',lineHeight:1.8 }}>{a}</div>
    </details>
  );
}
