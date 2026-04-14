// src/app/blog/page.tsx
import { Metadata } from 'next';
export const metadata: Metadata = { title: 'Blog | Plywood & Hardware Guide — Karur Plywood & Company', description: 'Expert buying guides, tips and advice on plywood, doors, laminates and hardware from Karur\'s most trusted plywood dealer.' };
const WA = process.env.NEXT_PUBLIC_WA_NUMBER || '919999999999';

const POSTS = [
  { emoji:'🪵', cat:'Plywood Guide', read:'5 min read', title:'BWR vs MR Plywood — Which One Should You Choose?', excerpt:"Confused between BWR and MR plywood? Learn the key differences, best uses and which grade is right for your kitchen, bedroom or bathroom.", bg:'linear-gradient(135deg,#2A1A08,#1a1006)', waText:'Hi%2C+I+have+a+question+about+BWR+vs+MR+plywood.' },
  { emoji:'📏', cat:'Buying Guide', read:'6 min read', title:'Plywood Thickness Guide — What to Use for Furniture, Flooring & Roofing', excerpt:"From 4mm to 25mm — a complete guide to choosing the right plywood thickness for every application in your home or office.", bg:'linear-gradient(135deg,#1A1A0D,#101008)', waText:'Hi%2C+I+need+help+choosing+plywood+thickness.' },
  { emoji:'🎨', cat:'Interior Design', read:'4 min read', title:'Top 5 Laminate Sheet Designs for Kitchen Cabinets in 2025', excerpt:"Discover the trending laminate sheet designs for modular kitchens in 2025 — from bold gloss finishes to natural wood textures.", bg:'linear-gradient(135deg,#1A0D0D,#100808)', waText:'Hi%2C+I+need+help+choosing+laminate+designs.' },
  { emoji:'🏗️', cat:'Construction', read:'7 min read', title:'How to Estimate Plywood Requirement for a 3BHK House', excerpt:"A step-by-step guide for builders and homeowners to calculate the total plywood needed for a standard 3BHK house construction.", bg:'linear-gradient(135deg,#0D1A1A,#081010)', waText:'Hi%2C+I+need+help+estimating+plywood+for+my+house.' },
  { emoji:'🚪', cat:'Doors Guide', read:'5 min read', title:'Flush Door vs Panel Door — Pros, Cons & Best Uses', excerpt:"Can't decide between flush and panel doors for your home? Here's everything you need to know before you buy.", bg:'linear-gradient(135deg,#1A100D,#100A08)', waText:'Hi%2C+I+need+help+choosing+between+flush+and+panel+doors.' },
  { emoji:'🏆', cat:'Brand Comparison', read:'8 min read', title:'CenturyPly vs Greenply vs Kitply — Which Brand is Best in 2025?', excerpt:"A detailed, unbiased comparison of India's top plywood brands — quality, price, durability and which one is worth your money.", bg:'linear-gradient(135deg,#1A1506,#100E03)', waText:'Hi%2C+which+plywood+brand+do+you+recommend%3F' },
  { emoji:'💰', cat:'Pricing', read:'3 min read', title:'Plywood Price List in Tamil Nadu — Updated 2025 Rates', excerpt:"Latest plywood prices in Tamil Nadu for BWR, MR and commercial grade plywood. Updated market rates for all major brands.", bg:'linear-gradient(135deg,#0D1A0D,#081008)', waText:'Hi%2C+can+you+share+your+current+plywood+price+list%3F' },
  { emoji:'⚠️', cat:'Tips & Advice', read:'5 min read', title:'5 Mistakes to Avoid When Buying Plywood for Construction', excerpt:"Common buying mistakes that cost homeowners and builders thousands of rupees — and how to avoid them.", bg:'linear-gradient(135deg,#1A0D1A,#100810)', waText:'Hi%2C+I+want+to+avoid+mistakes+when+buying+plywood.' },
  { emoji:'🔩', cat:'Hardware Guide', read:'4 min read', title:'Best Hardware Fittings for Modular Kitchen Cabinets', excerpt:"From soft-close hinges to pull-out drawers — the complete guide to choosing the right hardware fittings for your modular kitchen.", bg:'linear-gradient(135deg,#0D1520,#081018)', waText:'Hi%2C+I+need+hardware+fittings+for+my+modular+kitchen.' },
  { emoji:'📊', cat:'Comparison', read:'6 min read', title:'Plywood vs MDF vs Particle Board — What\'s Right for Your Furniture?', excerpt:"Can't decide which board to use for your furniture? This guide breaks down the pros, cons and best uses of each material.", bg:'linear-gradient(135deg,#1A1206,#100E04)', waText:'Hi%2C+I+need+help+choosing+between+plywood+and+MDF.' },
  { emoji:'🏠', cat:'Local SEO', read:'4 min read', title:'Best Plywood Dealers in Karur — Complete Buyer\'s Guide', excerpt:"A comprehensive guide to buying plywood in Karur — what to check, where to buy, and what prices to expect.", bg:'linear-gradient(135deg,#1A0D08,#100804)', waText:'Hi%2C+I%27m+looking+for+plywood+in+Karur.' },
  { emoji:'✅', cat:'Quality Guide', read:'5 min read', title:'How to Identify Original ISI Marked Plywood (Avoid Fakes)', excerpt:"Learn how to spot genuine ISI-certified plywood and avoid low-quality fakes that can damage your furniture and home.", bg:'linear-gradient(135deg,#0D1A10,#081209)', waText:'Hi%2C+how+do+I+know+if+plywood+is+genuine+ISI+marked%3F' },
];

export default function BlogPage() {
  return (
    <>
      <section style={{ background:'linear-gradient(135deg,#1C140D,#161009)',borderBottom:'1px solid rgba(200,136,74,0.15)',padding:'70px 0',textAlign:'center' }}>
        <div style={{ maxWidth:700,margin:'0 auto',padding:'0 24px' }}>
          <div style={{ display:'inline-flex',alignItems:'center',gap:8,fontSize:11,fontWeight:600,letterSpacing:3,textTransform:'uppercase',color:'#C8884A',marginBottom:14 }}>
            <span style={{ width:24,height:1,background:'#C8884A',display:'inline-block' }}></span>Knowledge Base
          </div>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(40px,5vw,58px)',fontWeight:700,color:'#F0E8DC',lineHeight:1.1,marginBottom:12 }}>
            Plywood &amp; Hardware <span style={{ color:'#E0A86A' }}>Guide</span>
          </h1>
          <p style={{ fontSize:16,color:'#9A8070' }}>Expert advice, buying guides and tips from Karur's most trusted plywood dealer.</p>
        </div>
      </section>

      <section style={{ padding:'72px 0' }}>
        <div style={{ maxWidth:1200,margin:'0 auto',padding:'0 48px' }}>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24 }} className="blog-grid">
            {POSTS.map(p => (
              <div key={p.title} style={{ background:'#1C140D',border:'1px solid rgba(200,136,74,0.15)',borderRadius:20,overflow:'hidden' }} className="card-lift">
                <div style={{ height:150,display:'flex',alignItems:'center',justifyContent:'center',fontSize:60,background:p.bg,position:'relative' }}>
                  <div style={{ position:'absolute',inset:0,background:'linear-gradient(0deg,#1C140D 0%,transparent 60%)' }}/>
                  <span style={{ position:'relative',zIndex:1 }}>{p.emoji}</span>
                </div>
                <div style={{ padding:24 }}>
                  <div style={{ display:'flex',alignItems:'center',gap:10,marginBottom:10 }}>
                    <span style={{ fontSize:11,fontWeight:600,color:'#C8884A',letterSpacing:1,textTransform:'uppercase' }}>{p.cat}</span>
                    <span style={{ fontSize:11,color:'#9A8070' }}>· {p.read}</span>
                  </div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:19,fontWeight:700,color:'#F0E8DC',marginBottom:10,lineHeight:1.3 }}>{p.title}</div>
                  <div style={{ fontSize:13,color:'#9A8070',lineHeight:1.7,marginBottom:18 }}>{p.excerpt}</div>
                  <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between' }}>
                    <span style={{ fontSize:12,color:'#9A8070' }}>Karur Plywood Team</span>
                    <a href={`https://wa.me/${WA}?text=${p.waText}`} target="_blank" rel="noopener"
                      style={{ fontSize:12,color:'#25D366',fontWeight:600,textDecoration:'none' }}>
                      Ask on WhatsApp →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop:64,background:'linear-gradient(135deg,#0D2B17,#0A1F10)',border:'1px solid rgba(37,211,102,0.2)',borderRadius:24,padding:'48px 56px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:32,flexWrap:'wrap' }}>
            <div>
              <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(24px,3vw,34px)',fontWeight:700,color:'#F0E8DC',marginBottom:8 }}>Still Have Questions?</div>
              <div style={{ fontSize:15,color:'rgba(255,255,255,0.5)' }}>Our experts in Karur are happy to guide you — reply within minutes.</div>
            </div>
            <a href={`https://wa.me/${WA}?text=Hi%2C+I+have+a+question+about+plywood.+Can+you+help%3F`} target="_blank" rel="noopener"
              style={{ display:'inline-flex',alignItems:'center',gap:8,padding:'14px 28px',borderRadius:8,background:'#25D366',color:'white',fontWeight:700,fontSize:14,textDecoration:'none',flexShrink:0 }}>
              💬 Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:1024px){.blog-grid{grid-template-columns:repeat(2,1fr)!important}} @media(max-width:640px){.blog-grid{grid-template-columns:1fr!important} div[style*="padding: 0 48px"]{padding:0 20px!important}}`}</style>
    </>
  );
}
