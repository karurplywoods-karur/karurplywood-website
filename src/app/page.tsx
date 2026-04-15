// src/app/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import ReviewForm from '@/components/ReviewForm';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'Karur Plywood & Company | Best Plywood Dealer in Karur, Tamil Nadu',
  description: "Karur's most trusted wholesale & retail plywood shop. Premium plywood, doors, laminates & hardware. 25+ years of trust. Get instant WhatsApp quote.",
};

const reviews = [
  {
    id: 1,
    name: "Ramesh Kumar",
    rating: 5,
    message: "Best plywood shop in Karur. Good quality and price.",
    role: "Contractor"
  },
  {
    id: 2,
    name: "Suresh Builders",
    rating: 5,
    message: "Very competitive pricing. Highly recommended.",
    role: "Builder"
  }
];

const WA = process.env.NEXT_PUBLIC_WA_NUMBER || '919999999999';
const GMAPS = process.env.NEXT_PUBLIC_GMAPS_EMBED_URL || '';

const S: React.CSSProperties = { // section style
  padding: '96px 0',
};
const SI = { maxWidth: 1200, margin: '0 auto', padding: '0 48px' } as const;

#export default function HomePage() {
#  const reviews = getReviews();

  return (
    <>
      {/* Replace default WhatsAppFloat with the interactive widget */}
      <WhatsAppWidget />

      {/* ── HERO ── */}
      <section style={{ minHeight: 'calc(100vh - 70px)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: 'var(--bg)' }}>
        {/* Background effects */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 70% 50%, rgba(200,136,74,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(139,94,42,0.05) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(200,136,74,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(200,136,74,0.035) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div style={{ ...SI, position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', paddingTop: 80, paddingBottom: 80, width: '100%' }}
          className="hero-grid">

          {/* Left */}
          <div className="fade-up">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(200,136,74,0.1)', border: '1px solid rgba(200,136,74,0.3)', borderRadius: 30, padding: '6px 16px', fontSize: 12, color: '#E0A86A', fontWeight: 500, marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, background: '#25D366', borderRadius: '50%', display: 'inline-block', animation: 'pulse 1.5s infinite' }} />
              Karur's Most Trusted Plywood Store
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(48px,5.5vw,76px)', fontWeight: 700, color: '#F0E8DC', lineHeight: 1.05, marginBottom: 10 }}>
              Quality Wood.
              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontWeight: 400, color: '#E0A86A', display: 'block' }}>
                Trusted Since Day One.
              </span>
            </h1>
            <p style={{ fontSize: 16, color: '#9A8070', margin: '20px 0 36px', lineHeight: 1.85, maxWidth: 440 }}>
              Wholesale &amp; retail supply of premium plywood, doors, laminates &amp; hardware. Serving contractors, builders &amp; homeowners across Karur and nearby districts.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
              <a href={`https://wa.me/${WA}?text=Hi%2C+I%27m+interested+in+your+products.+Can+you+send+me+a+price+list%3F`} target="_blank" rel="noopener"
                style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'14px 28px',borderRadius:8,background:'#25D366',color:'white',fontWeight:700,fontSize:14,textDecoration:'none',boxShadow:'0 4px 20px rgba(37,211,102,0.3)' }}>
                💬 Get WhatsApp Quote
              </a>
              <a href="tel:+919999999999"
                style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'14px 28px',borderRadius:8,background:'transparent',color:'#F0E8DC',fontWeight:600,fontSize:14,textDecoration:'none',border:'1px solid rgba(200,136,74,0.3)' }}>
                📞 Call Now
              </a>
              <Link href="/products"
                style={{ display:'inline-flex',alignItems:'center',gap:6,padding:'14px 0',background:'transparent',color:'#E0A86A',fontWeight:600,fontSize:14,textDecoration:'none' }}>
                Explore Products →
              </Link>
            </div>
            {/* Stats */}
            <div style={{ display:'flex',gap:32,paddingTop:32,borderTop:'1px solid rgba(200,136,74,0.15)',flexWrap:'wrap' }}>
              {[['25+','Years of Trust'],['500+','Happy Customers'],['20+','Top Brands'],['4','Product Categories']].map(([n,l]) => (
                <div key={l}>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:32,fontWeight:700,color:'#E0A86A',lineHeight:1 }}>{n}</div>
                  <div style={{ fontSize:12,color:'#9A8070',marginTop:4,fontWeight:500 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="hero-right" style={{ position:'relative' }}>
            <div style={{ background:'#1C140D',border:'1px solid rgba(200,136,74,0.15)',borderRadius:24,overflow:'hidden',aspectRatio:'4/5',display:'flex',alignItems:'flex-end',position:'relative' }}>
              <div style={{ position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:160,opacity:0.08 }}>🪵</div>
              {/* Float badge */}
              <div style={{ position:'absolute',top:24,right:24,background:'#241A10',border:'1px solid rgba(200,136,74,0.3)',borderRadius:12,padding:'14px 18px',textAlign:'center' }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:700,color:'#E8B820',lineHeight:1 }}>ISI</div>
                <div style={{ fontSize:10,color:'#9A8070',textTransform:'uppercase',letterSpacing:1,fontWeight:500,marginTop:2 }}>Certified</div>
              </div>
              <div style={{ position:'relative',zIndex:2,padding:32,width:'100%',background:'linear-gradient(0deg,rgba(14,11,8,0.95) 0%,transparent 100%)' }}>
                <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:20 }}>
                  {[['🪵','Plywood'],['🚪','Doors'],['🎨','Laminates'],['🔩','Hardware']].map(([e,l]) => (
                    <div key={l} style={{ background:'rgba(200,136,74,0.1)',border:'1px solid rgba(200,136,74,0.2)',borderRadius:10,padding:'12px 14px',fontSize:13,fontWeight:500,color:'#E0A86A',display:'flex',alignItems:'center',gap:8 }}>
                      {e} {l}
                    </div>
                  ))}
                </div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:700,color:'#F0E8DC',marginBottom:4 }}>Premium Quality Products</div>
                <div style={{ fontSize:12,color:'#9A8070' }}>CenturyPly · Greenply · Merino · Greenlam</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div style={{ background:'#1C140D',borderTop:'1px solid rgba(200,136,74,0.12)',borderBottom:'1px solid rgba(200,136,74,0.12)',padding:'28px 0' }}>
        <div style={{ ...SI,display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:20 }}>
          {[['🏆','25+ Years','Established Business'],['✅','ISI Marked','Genuine Products Only'],['🚚','Same Day','Delivery in Karur'],['💼','Wholesale','Bulk Pricing Available'],['🌟','500+','Satisfied Customers']].map(([icon,num,label],i) => (
            <div key={i} style={{ display:'flex',alignItems:'center',gap:14 }}>
              <div style={{ width:44,height:44,background:'rgba(200,136,74,0.1)',border:'1px solid rgba(200,136,74,0.15)',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,flexShrink:0 }}>{icon}</div>
              <div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontWeight:700,color:'#E0A86A',lineHeight:1 }}>{num}</div>
                <div style={{ fontSize:12,color:'#9A8070',fontWeight:500,marginTop:2 }}>{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PRODUCTS ── */}
      <section style={S}>
        <div style={SI}>
          <div style={{ display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:48,flexWrap:'wrap',gap:16 }}>
            <div>
              <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:11,fontWeight:600,letterSpacing:3,textTransform:'uppercase',color:'#C8884A',marginBottom:12 }}>
                <span style={{ width:24,height:1,background:'#C8884A',display:'inline-block' }}></span>Our Products
              </div>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(36px,4vw,52px)',fontWeight:700,color:'#F0E8DC',lineHeight:1.1 }}>
                Everything You Need<br/><span style={{ color:'#E0A86A' }}>For Your Project</span>
              </h2>
            </div>
            <Link href="/products" style={{ color:'#E0A86A',fontWeight:600,fontSize:14,textDecoration:'none',border:'1px solid rgba(200,136,74,0.3)',padding:'10px 20px',borderRadius:8 }}>
              View All Products →
            </Link>
          </div>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20 }} className="products-grid">
            {[
              { icon:'🪵',name:'Plywood',desc:'ISI-marked BWR, MR & commercial plywood in all grades.',tags:['BWR Grade','MR Grade','Commercial','Marine'],bg:'linear-gradient(135deg,#2A1A08,#1a1006)' },
              { icon:'🚪',name:'Doors',desc:'Flush, moulded, panel & PVC doors for homes & offices.',tags:['Flush Door','Moulded','Panel','PVC'],bg:'linear-gradient(135deg,#0D2020,#081515)' },
              { icon:'🎨',name:'Laminates',desc:'100+ designs in gloss, matt & textured finishes.',tags:['High Gloss','Matt Finish','Textured','Digital Print'],bg:'linear-gradient(135deg,#1A1A0D,#101008)' },
              { icon:'🔩',name:'Hardware',desc:'Premium SS304 hinges, handles, locks & drawer systems.',tags:['Hinges','Handles','Locks','Drawer Channels'],bg:'linear-gradient(135deg,#1A0D1A,#100810)' },
            ].map(p => (
              <Link key={p.name} href="/products"
                style={{ background:'#1C140D',border:'1px solid rgba(200,136,74,0.15)',borderRadius:20,overflow:'hidden',textDecoration:'none',display:'block' }}
                className="card-lift">
                <div style={{ height:170,display:'flex',alignItems:'center',justifyContent:'center',fontSize:68,background:p.bg,position:'relative' }}>
                  <div style={{ position:'absolute',inset:0,background:'linear-gradient(0deg,#1C140D 0%,transparent 60%)' }}/>
                  <span style={{ position:'relative',zIndex:1 }}>{p.icon}</span>
                </div>
                <div style={{ padding:'20px 24px 24px' }}>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:700,color:'#F0E8DC',marginBottom:6 }}>{p.name}</div>
                  <div style={{ fontSize:13,color:'#9A8070',marginBottom:14,lineHeight:1.6 }}>{p.desc}</div>
                  <div style={{ display:'flex',flexWrap:'wrap',gap:6,marginBottom:14 }}>
                    {p.tags.map(t => <span key={t} style={{ fontSize:11,background:'rgba(200,136,74,0.1)',color:'#C8884A',padding:'3px 10px',borderRadius:20,border:'1px solid rgba(200,136,74,0.15)',fontWeight:500 }}>{t}</span>)}
                  </div>
                  <div style={{ fontSize:13,color:'#E0A86A',fontWeight:600 }}>View Products →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ ...S, background:'#161009' }}>
        <div style={SI}>
          <div style={{ textAlign:'center',marginBottom:56 }}>
            <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:11,fontWeight:600,letterSpacing:3,textTransform:'uppercase',color:'#C8884A',marginBottom:12 }}>
              <span style={{ width:24,height:1,background:'#C8884A',display:'inline-block' }}></span>Why Choose Us
            </div>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(32px,4vw,48px)',fontWeight:700,color:'#F0E8DC' }}>
              The <span style={{ color:'#E0A86A' }}>Karur Plywood</span> Difference
            </h2>
          </div>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24 }} className="why-grid">
            {[
              ['💰','Best Price Guarantee','Competitive wholesale & retail pricing. If you find a better rate for the same quality, we\'ll match it.'],
              ['✅','Genuine Branded Products','Every product is 100% original and ISI-certified. No duplicate or substandard materials — ever.'],
              ['📦','Bulk Wholesale Available','Contractors & builders get special bulk pricing. WhatsApp us for a custom wholesale quote.'],
              ['🏪','Retail Walk-ins Welcome','Visit our Karur showroom and browse our full range. Our staff will guide you to the right product.'],
              ['🎓','Expert Advice','25+ years of experience means we know plywood inside-out. We help you pick the right grade.'],
              ['🚚','Fast Local Delivery','Same-day delivery in Karur for orders before 12 PM. We also serve Trichy, Namakkal & Erode.'],
            ].map(([icon,title,desc]) => (
              <div key={title as string} style={{ background:'#1C140D',border:'1px solid rgba(200,136,74,0.15)',borderRadius:20,padding:32 }} className="card-lift">
                <div style={{ width:52,height:52,background:'linear-gradient(135deg,rgba(200,136,74,0.2),rgba(139,94,42,0.1))',border:'1px solid rgba(200,136,74,0.3)',borderRadius:14,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,marginBottom:20 }}>{icon}</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontWeight:700,color:'#F0E8DC',marginBottom:8 }}>{title}</div>
                <div style={{ fontSize:13,color:'#9A8070',lineHeight:1.7 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WA BANNER ── */}
      <section style={{ padding:'48px 0' }}>
        <div style={SI}>
          <div style={{ background:'linear-gradient(135deg,#0D2B17,#0A1F10)',border:'1px solid rgba(37,211,102,0.2)',borderRadius:24,padding:'56px 64px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:40,position:'relative',overflow:'hidden',flexWrap:'wrap' }}>
            <div style={{ position:'absolute',top:-60,right:-60,width:300,height:300,background:'radial-gradient(circle,rgba(37,211,102,0.08),transparent 70%)',pointerEvents:'none' }}/>
            <div style={{ fontSize:60,flexShrink:0 }}>💬</div>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(24px,3vw,36px)',fontWeight:700,color:'#F0E8DC',marginBottom:8 }}>Get Today's Price on WhatsApp</div>
              <div style={{ fontSize:15,color:'rgba(255,255,255,0.5)' }}>Send your requirements and we'll reply within minutes with pricing &amp; availability.</div>
            </div>
            <div style={{ display:'flex',gap:12,flexShrink:0,flexWrap:'wrap' }}>
              <a href={`https://wa.me/${WA}?text=Hi%2C+I+need+plywood+for+my+project.+Can+you+help%3F`} target="_blank" rel="noopener"
                style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'14px 24px',borderRadius:8,background:'#25D366',color:'white',fontWeight:700,fontSize:14,textDecoration:'none' }}>
                💬 WhatsApp Now
              </a>
              <a href="tel:+919999999999"
                style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'14px 24px',borderRadius:8,background:'transparent',color:'white',fontWeight:600,fontSize:14,textDecoration:'none',border:'1px solid rgba(255,255,255,0.2)' }}>
                📞 Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section style={{ ...S, background:'#161009' }}>
        <div style={SI}>
          <div style={{ display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:48,flexWrap:'wrap',gap:16 }}>
            <div>
              <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:11,fontWeight:600,letterSpacing:3,textTransform:'uppercase',color:'#C8884A',marginBottom:12 }}>
                <span style={{ width:24,height:1,background:'#C8884A',display:'inline-block' }}></span>Customer Reviews
              </div>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(32px,4vw,48px)',fontWeight:700,color:'#F0E8DC' }}>
                What Our <span style={{ color:'#E0A86A' }}>Customers Say</span>
              </h2>
            </div>
          </div>

          {reviews.length > 0 ? (
            <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,marginBottom:48 }} className="reviews-grid">
              {reviews.map((r: any) => (
                <div key={r.id} style={{ background:'#1C140D',border:'1px solid rgba(200,136,74,0.15)',borderRadius:20,padding:32 }} className="card-lift">
                  <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:56,color:'#C8884A',lineHeight:0.5,marginBottom:20,opacity:0.4 }}>"</div>
                  <div style={{ color:'#E8B820',fontSize:14,letterSpacing:2,marginBottom:8 }}>{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</div>
                  <div style={{ fontSize:14,color:'#C8B8A0',lineHeight:1.8,marginBottom:24,fontStyle:'italic' }}>{r.message}</div>
                  <div style={{ fontWeight:600,fontSize:14,color:'#F0E8DC' }}>{r.name}</div>
                  {r.role && <div style={{ fontSize:12,color:'#9A8070',marginTop:2 }}>{r.role}</div>}
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign:'center',padding:'48px 0',color:'#9A8070',marginBottom:48 }}>Be the first to leave a review!</div>
          )}

          {/* Review form */}
          <div style={{ maxWidth:640,margin:'0 auto' }}>
            <ReviewForm />
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section style={S}>
        <div style={SI}>
          <div style={{ textAlign:'center',marginBottom:40 }}>
            <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:11,fontWeight:600,letterSpacing:3,textTransform:'uppercase',color:'#C8884A',marginBottom:12 }}>
              <span style={{ width:24,height:1,background:'#C8884A',display:'inline-block' }}></span>Brands We Stock
            </div>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(28px,3.5vw,44px)',fontWeight:700,color:'#F0E8DC' }}>Only the <span style={{ color:'#E0A86A' }}>Best Brands</span></h2>
          </div>
          <div style={{ display:'flex',flexWrap:'wrap',gap:12,justifyContent:'center' }}>
            {['CenturyPly','Greenply','Merino','Greenlam','Kitply','Durian','Formica','BWP Star','Action Tesa','Dorset','Hettich','Hafele'].map(b => (
              <div key={b} style={{ background:'#1C140D',border:'1px solid rgba(200,136,74,0.15)',borderRadius:10,padding:'12px 24px',fontSize:14,fontWeight:600,color:'#9A8070',transition:'all 0.2s',cursor:'default' }}
                className="card-lift">{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section style={{ ...S, paddingTop:0 }}>
        <div style={SI}>
          <div style={{ marginBottom:40,textAlign:'center' }}>
            <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:11,fontWeight:600,letterSpacing:3,textTransform:'uppercase',color:'#C8884A',marginBottom:12 }}>
              <span style={{ width:24,height:1,background:'#C8884A',display:'inline-block' }}></span>Find Us
            </div>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(28px,3.5vw,44px)',fontWeight:700,color:'#F0E8DC' }}>Visit Our <span style={{ color:'#E0A86A' }}>Showroom</span></h2>
          </div>
          <div style={{ background:'#1C140D',border:'1px solid rgba(200,136,74,0.15)',borderRadius:20,overflow:'hidden',display:'grid',gridTemplateColumns:'1fr 340px' }} className="map-container">
            {GMAPS ? (
              <iframe src={GMAPS} width="100%" height="380" style={{ border:0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            ) : (
              <div style={{ height:380,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:16,background:'linear-gradient(135deg,#1a1206,#0E0B08)',position:'relative' }}>
                <div style={{ position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(200,136,74,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(200,136,74,0.04) 1px,transparent 1px)',backgroundSize:'30px 30px' }}/>
                <div style={{ fontSize:48,position:'relative' }}>📍</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontWeight:700,color:'#F0E8DC',position:'relative' }}>Karur Plywood &amp; Company</div>
                <div style={{ fontSize:14,color:'#9A8070',position:'relative' }}>Karur, Tamil Nadu 639 001</div>
                <a href="https://maps.google.com/?q=Karur+Plywood+Company+Karur+Tamil+Nadu" target="_blank" rel="noopener"
                  style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'12px 22px',borderRadius:8,background:'linear-gradient(135deg,#C8884A,#8B5E2A)',color:'white',fontWeight:700,fontSize:13,textDecoration:'none',position:'relative' }}>
                  🗺️ Open in Google Maps
                </a>
              </div>
            )}
            <div style={{ padding:'40px 32px',display:'flex',flexDirection:'column',gap:20,borderLeft:'1px solid rgba(200,136,74,0.12)' }}>
              {[['📍','Address','Main Road, Karur\nTamil Nadu - 639 001'],['📞','Phone','+91 99999 99999'],['⏰','Hours','Mon–Sat: 9 AM – 7 PM\nSunday: Closed'],['💬','WhatsApp','+91 99999 99999']].map(([icon,label,value]) => (
                <div key={label as string} style={{ display:'flex',gap:14,alignItems:'flex-start' }}>
                  <div style={{ width:36,height:36,background:'rgba(200,136,74,0.1)',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',fontSize:16,flexShrink:0 }}>{icon}</div>
                  <div>
                    <div style={{ fontSize:11,color:'#9A8070',textTransform:'uppercase',letterSpacing:1,fontWeight:600,marginBottom:2 }}>{label}</div>
                    <div style={{ fontSize:14,color:'#C8B8A0',lineHeight:1.6 }}>{(value as string).split('\n').map((l,i) => <span key={i}>{l}{i===0&&(value as string).includes('\n')?<br/>:null}</span>)}</div>
                  </div>
                </div>
              ))}
              <a href={`https://wa.me/${WA}?text=Hi%2C+I%27d+like+to+visit+your+showroom.+What+are+your+hours%3F`} target="_blank" rel="noopener"
                style={{ display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,padding:'13px 0',borderRadius:8,background:'#25D366',color:'white',fontWeight:700,fontSize:14,textDecoration:'none',marginTop:8 }}>
                💬 Chat Before Visiting
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENQUIRY FORM ── */}
      <section style={{ ...S, background:'#161009',paddingTop:48 }}>
        <div style={{ ...SI,display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'start' }} className="enquiry-grid">
          <div>
            <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:11,fontWeight:600,letterSpacing:3,textTransform:'uppercase',color:'#C8884A',marginBottom:12 }}>
              <span style={{ width:24,height:1,background:'#C8884A',display:'inline-block' }}></span>Quick Enquiry
            </div>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(32px,4vw,48px)',fontWeight:700,color:'#F0E8DC',lineHeight:1.1,marginBottom:16 }}>
              Get a <span style={{ color:'#E0A86A' }}>Free Quote</span><br/>in 5 Minutes
            </h2>
            <p style={{ fontSize:15,color:'#9A8070',lineHeight:1.8,marginBottom:32 }}>Fill the form and we'll open WhatsApp with your message pre-filled. Or just click the floating WhatsApp button — we reply within minutes.</p>
            {[['⚡','Instant Response','We reply on WhatsApp within minutes'],['✅','No Obligation','Free quotes with zero pressure'],['🎯','Expert Advice','25+ years experience guiding customers']].map(([i,t,d]) => (
              <div key={t as string} style={{ display:'flex',gap:14,marginBottom:20 }}>
                <div style={{ width:40,height:40,background:'rgba(200,136,74,0.1)',border:'1px solid rgba(200,136,74,0.2)',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,flexShrink:0 }}>{i}</div>
                <div>
                  <div style={{ fontWeight:600,fontSize:14,color:'#F0E8DC',marginBottom:2 }}>{t}</div>
                  <div style={{ fontSize:13,color:'#9A8070' }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background:'#1C140D',border:'1px solid rgba(200,136,74,0.15)',borderRadius:24,padding:40 }}>
            <EnquiryForm />
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:1024px){
          .hero-grid{grid-template-columns:1fr!important}
          .hero-right{display:none}
          .products-grid{grid-template-columns:repeat(2,1fr)!important}
          .why-grid{grid-template-columns:repeat(2,1fr)!important}
          .reviews-grid{grid-template-columns:1fr!important}
          .map-container{grid-template-columns:1fr!important}
          .enquiry-grid{grid-template-columns:1fr!important}
        }
        @media(max-width:640px){
          .products-grid{grid-template-columns:1fr!important}
          .why-grid{grid-template-columns:1fr!important}
          div[style*="padding: 0 48px"]{padding:0 20px!important}
        }
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
      `}</style>
    </>
  );
}
