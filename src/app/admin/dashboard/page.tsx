'use client';
// src/app/admin/dashboard/page.tsx
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface Enquiry { id:number; name:string; phone:string; location:string; product:string; message:string; status:string; created_at:string; }
interface Review  { id:number; name:string; role:string; rating:number; message:string; approved:number; created_at:string; }
interface Stats   { totalEnquiries:number; newEnquiries:number; totalReviews:number; pendingReviews:number; recentEnquiries:Enquiry[]; byProduct:any[]; }

type Tab = 'overview'|'enquiries'|'reviews';

const STATUS_COLORS: Record<string,string> = { new:'#25D366', contacted:'#E8B820', converted:'#C8884A', closed:'#9A8070' };

export default function AdminDashboard() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('overview');
  const [stats, setStats] = useState<Stats|null>(null);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const [sRes, eRes, rRes] = await Promise.all([
        fetch('/api/admin/stats'),
        fetch('/api/enquiries'),
        fetch('/api/reviews?all=1'),
      ]);
      if (sRes.status === 401) { router.push('/admin'); return; }
      setStats(await sRes.json());
      setEnquiries(await eRes.json());
      setReviews(await rRes.json());
    } catch { router.push('/admin'); }
    finally { setLoading(false); }
  }, [router]);

  useEffect(() => { fetchAll(); }, [fetchAll]);

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin');
  };

  const updateStatus = async (id: number, status: string) => {
    await fetch(`/api/enquiries/${id}`, { method:'PATCH', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ status }) });
    setEnquiries(e => e.map(x => x.id===id ? {...x,status} : x));
  };

  const deleteEnquiry = async (id: number) => {
    if (!confirm('Delete this enquiry?')) return;
    await fetch(`/api/enquiries/${id}`, { method:'DELETE' });
    setEnquiries(e => e.filter(x => x.id!==id));
    setStats(s => s ? { ...s, totalEnquiries: s.totalEnquiries-1 } : s);
  };

  const toggleApprove = async (id: number, approved: number) => {
    await fetch(`/api/reviews/${id}`, { method:'PATCH', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ approved: approved===0?1:0 }) });
    setReviews(r => r.map(x => x.id===id ? {...x,approved:x.approved===0?1:0} : x));
  };

  const deleteReview = async (id: number) => {
    if (!confirm('Delete this review?')) return;
    await fetch(`/api/reviews/${id}`, { method:'DELETE' });
    setReviews(r => r.filter(x => x.id!==id));
  };

  const filteredEnquiries = enquiries.filter(e => {
    const matchStatus = filter==='all' || e.status===filter;
    const matchSearch = !search || e.name.toLowerCase().includes(search.toLowerCase()) || e.phone.includes(search) || e.product.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const S = (active: boolean): React.CSSProperties => ({
    padding: '10px 20px', borderRadius: 8, border: 'none', cursor: 'pointer',
    fontFamily: 'Outfit,sans-serif', fontWeight: 600, fontSize: 14,
    background: active ? 'linear-gradient(135deg,#C8884A,#8B5E2A)' : 'transparent',
    color: active ? 'white' : '#9A8070',
    borderBottom: active ? 'none' : '1px solid transparent',
    transition: 'all 0.2s',
  });

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });

  if (loading) return (
    <div style={{ minHeight:'100vh',background:'#0E0B08',display:'flex',alignItems:'center',justifyContent:'center' }}>
      <div style={{ textAlign:'center' }}>
        <div style={{ fontSize:40,marginBottom:12 }}>⏳</div>
        <div style={{ color:'#9A8070',fontSize:14 }}>Loading dashboard...</div>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight:'100vh',background:'#0E0B08',color:'#F0E8DC',fontFamily:'Outfit,sans-serif' }}>
      {/* Top bar */}
      <div style={{ background:'#1C140D',borderBottom:'1px solid rgba(200,136,74,0.15)',padding:'0 32px',height:64,display:'flex',alignItems:'center',justifyContent:'space-between',position:'sticky',top:0,zIndex:100 }}>
        <div style={{ display:'flex',alignItems:'center',gap:12 }}>
          <div style={{ width:36,height:36,background:'linear-gradient(135deg,#C8884A,#8B5E2A)',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',fontSize:16 }}>🪵</div>
          <div>
            <div style={{ fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:16,color:'#F0E8DC',lineHeight:1.2 }}>Admin Dashboard</div>
            <div style={{ fontSize:10,color:'#9A8070' }}>Karur Plywood &amp; Company</div>
          </div>
        </div>
        <div style={{ display:'flex',alignItems:'center',gap:12 }}>
          <a href="/" target="_blank" style={{ fontSize:13,color:'#9A8070',textDecoration:'none',padding:'7px 14px',border:'1px solid rgba(200,136,74,0.2)',borderRadius:7 }}>🌐 View Site</a>
          <button onClick={logout} style={{ fontSize:13,background:'rgba(248,113,113,0.1)',border:'1px solid rgba(248,113,113,0.2)',color:'#F87171',borderRadius:7,padding:'7px 14px',cursor:'pointer',fontFamily:'Outfit,sans-serif' }}>Logout</button>
        </div>
      </div>

      <div style={{ maxWidth:1200,margin:'0 auto',padding:'32px 32px' }}>
        {/* Tab nav */}
        <div style={{ display:'flex',gap:4,marginBottom:32,background:'#1C140D',border:'1px solid rgba(200,136,74,0.15)',borderRadius:12,padding:6,width:'fit-content' }}>
          {(['overview','enquiries','reviews'] as Tab[]).map(t => (
            <button key={t} onClick={() => setTab(t)} style={S(tab===t)}>
              {t==='overview'?'📊 Overview':t==='enquiries'?`📋 Enquiries ${enquiries.length?`(${enquiries.filter(e=>e.status==='new').length} new)`:''}`:` ⭐ Reviews ${reviews.length?`(${reviews.filter(r=>r.approved===0).length} pending)`:''}`}
            </button>
          ))}
        </div>

        {/* ── OVERVIEW ── */}
        {tab==='overview' && stats && (
          <div>
            {/* Stats cards */}
            <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16,marginBottom:32 }} className="stats-grid">
              {[
                { icon:'📋', num:stats.totalEnquiries, label:'Total Enquiries', sub:`${stats.newEnquiries} new`, color:'#C8884A' },
                { icon:'🆕', num:stats.newEnquiries, label:'New Enquiries', sub:'Need follow-up', color:'#25D366' },
                { icon:'⭐', num:stats.totalReviews, label:'Total Reviews', sub:`${stats.pendingReviews} pending approval`, color:'#E8B820' },
                { icon:'⏳', num:stats.pendingReviews, label:'Pending Reviews', sub:'Awaiting approval', color:'#F87171' },
              ].map(s => (
                <div key={s.label} style={{ background:'#1C140D',border:'1px solid rgba(200,136,74,0.15)',borderRadius:16,padding:24 }}>
                  <div style={{ fontSize:28,marginBottom:10 }}>{s.icon}</div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:40,fontWeight:700,color:s.color,lineHeight:1 }}>{s.num}</div>
                  <div style={{ fontSize:14,fontWeight:600,color:'#F0E8DC',marginTop:6 }}>{s.label}</div>
                  <div style={{ fontSize:12,color:'#9A8070',marginTop:2 }}>{s.sub}</div>
                </div>
              ))}
            </div>

            <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:20 }} className="overview-grid">
              {/* Recent enquiries */}
              <div style={{ background:'#1C140D',border:'1px solid rgba(200,136,74,0.15)',borderRadius:16,padding:24 }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:700,color:'#F0E8DC',marginBottom:20 }}>Recent Enquiries</div>
                {stats.recentEnquiries.length===0 && <div style={{ color:'#9A8070',fontSize:13 }}>No enquiries yet.</div>}
                {stats.recentEnquiries.map(e => (
                  <div key={e.id} style={{ display:'flex',justifyContent:'space-between',alignItems:'flex-start',padding:'12px 0',borderBottom:'1px solid rgba(200,136,74,0.08)' }}>
                    <div>
                      <div style={{ fontWeight:600,fontSize:14,color:'#F0E8DC' }}>{e.name}</div>
                      <div style={{ fontSize:12,color:'#9A8070' }}>{e.product || 'General enquiry'} · {e.location}</div>
                    </div>
                    <div style={{ display:'flex',flexDirection:'column',alignItems:'flex-end',gap:6 }}>
                      <span style={{ fontSize:10,fontWeight:600,padding:'3px 8px',borderRadius:20,background:`${STATUS_COLORS[e.status]}20`,color:STATUS_COLORS[e.status],textTransform:'uppercase',letterSpacing:0.5 }}>{e.status}</span>
                      <span style={{ fontSize:11,color:'#9A8070' }}>{new Date(e.created_at).toLocaleDateString('en-IN')}</span>
                    </div>
                  </div>
                ))}
                <button onClick={() => setTab('enquiries')} style={{ marginTop:16,background:'none',border:'1px solid rgba(200,136,74,0.2)',borderRadius:8,color:'#E0A86A',padding:'8px 16px',cursor:'pointer',fontSize:13,fontFamily:'Outfit,sans-serif' }}>
                  View All Enquiries →
                </button>
              </div>

              {/* Enquiries by product */}
              <div style={{ background:'#1C140D',border:'1px solid rgba(200,136,74,0.15)',borderRadius:16,padding:24 }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:700,color:'#F0E8DC',marginBottom:20 }}>Enquiries by Product</div>
                {stats.byProduct.length===0 && <div style={{ color:'#9A8070',fontSize:13 }}>No data yet.</div>}
                {stats.byProduct.map((p: any) => {
                  const max = stats.byProduct[0]?.count || 1;
                  return (
                    <div key={p.product} style={{ marginBottom:14 }}>
                      <div style={{ display:'flex',justifyContent:'space-between',marginBottom:5 }}>
                        <div style={{ fontSize:13,color:'#C8B8A0' }}>{p.product || 'Not specified'}</div>
                        <div style={{ fontSize:13,fontWeight:600,color:'#E0A86A' }}>{p.count}</div>
                      </div>
                      <div style={{ height:6,background:'rgba(200,136,74,0.1)',borderRadius:3 }}>
                        <div style={{ height:'100%',borderRadius:3,background:'linear-gradient(90deg,#C8884A,#8B5E2A)',width:`${(p.count/max)*100}%`,transition:'width 0.5s' }}/>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── ENQUIRIES ── */}
        {tab==='enquiries' && (
          <div>
            {/* Toolbar */}
            <div style={{ display:'flex',gap:12,marginBottom:20,flexWrap:'wrap' }}>
              <input
                value={search} onChange={e => setSearch(e.target.value)}
                placeholder="🔍  Search by name, phone, product..."
                style={{ flex:1,minWidth:240,background:'#1C140D',border:'1px solid rgba(200,136,74,0.2)',borderRadius:8,padding:'10px 14px',fontSize:13,color:'#F0E8DC',fontFamily:'Outfit,sans-serif',outline:'none' }}
              />
              <select value={filter} onChange={e => setFilter(e.target.value)}
                style={{ background:'#1C140D',border:'1px solid rgba(200,136,74,0.2)',borderRadius:8,padding:'10px 14px',fontSize:13,color:'#F0E8DC',fontFamily:'Outfit,sans-serif',outline:'none',cursor:'pointer' }}>
                <option value="all">All Statuses</option>
                <option value="new">🟢 New</option>
                <option value="contacted">🟡 Contacted</option>
                <option value="converted">🟠 Converted</option>
                <option value="closed">⚫ Closed</option>
              </select>
              <button onClick={fetchAll} style={{ padding:'10px 16px',background:'rgba(200,136,74,0.1)',border:'1px solid rgba(200,136,74,0.2)',borderRadius:8,color:'#E0A86A',cursor:'pointer',fontSize:13,fontFamily:'Outfit,sans-serif' }}>🔄 Refresh</button>
            </div>

            <div style={{ fontSize:13,color:'#9A8070',marginBottom:16 }}>
              Showing {filteredEnquiries.length} of {enquiries.length} enquiries
            </div>

            {filteredEnquiries.length===0 && <div style={{ textAlign:'center',padding:'60px 0',color:'#9A8070' }}>No enquiries found.</div>}

            {filteredEnquiries.map(e => (
              <div key={e.id} style={{ background:'#1C140D',border:'1px solid rgba(200,136,74,0.15)',borderRadius:14,padding:24,marginBottom:12,display:'grid',gridTemplateColumns:'1fr auto',gap:20,alignItems:'start' }}
                className="enq-card">
                <div>
                  <div style={{ display:'flex',alignItems:'center',gap:10,marginBottom:8,flexWrap:'wrap' }}>
                    <span style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:700,color:'#F0E8DC' }}>{e.name}</span>
                    <span style={{ fontSize:10,fontWeight:600,padding:'3px 9px',borderRadius:20,background:`${STATUS_COLORS[e.status]}20`,color:STATUS_COLORS[e.status],textTransform:'uppercase',letterSpacing:0.5 }}>{e.status}</span>
                  </div>
                  <div style={{ display:'flex',gap:20,flexWrap:'wrap',marginBottom:e.message?10:0 }}>
                    <span style={{ fontSize:13,color:'#9A8070' }}>📞 {e.phone}</span>
                    {e.location && <span style={{ fontSize:13,color:'#9A8070' }}>📍 {e.location}</span>}
                    {e.product && <span style={{ fontSize:13,color:'#C8884A' }}>📦 {e.product}</span>}
                    <span style={{ fontSize:12,color:'#9A8070' }}>🕐 {formatDate(e.created_at)}</span>
                  </div>
                  {e.message && <div style={{ fontSize:13,color:'#9A8070',fontStyle:'italic',marginTop:6,lineHeight:1.6,maxWidth:600 }}>"{e.message}"</div>}
                </div>
                <div style={{ display:'flex',flexDirection:'column',gap:8,minWidth:160 }}>
                  <a href={`https://wa.me/${e.phone.replace(/\D/g,'')}?text=Hi+${encodeURIComponent(e.name)}%2C+this+is+Karur+Plywood.+Regarding+your+enquiry+for+${encodeURIComponent(e.product||'our products')}...`}
                    target="_blank" rel="noopener"
                    style={{ display:'flex',alignItems:'center',justifyContent:'center',gap:6,padding:'8px 0',borderRadius:8,background:'#25D366',color:'white',fontWeight:600,fontSize:12,textDecoration:'none' }}>
                    💬 Reply on WA
                  </a>
                  <select value={e.status} onChange={ev => updateStatus(e.id, ev.target.value)}
                    style={{ background:'#0E0B08',border:'1px solid rgba(200,136,74,0.2)',borderRadius:8,padding:'8px 10px',fontSize:12,color:'#F0E8DC',fontFamily:'Outfit,sans-serif',cursor:'pointer',outline:'none' }}>
                    <option value="new">🟢 New</option>
                    <option value="contacted">🟡 Contacted</option>
                    <option value="converted">🟠 Converted</option>
                    <option value="closed">⚫ Closed</option>
                  </select>
                  <button onClick={() => deleteEnquiry(e.id)}
                    style={{ padding:'7px 0',background:'rgba(248,113,113,0.08)',border:'1px solid rgba(248,113,113,0.15)',borderRadius:8,color:'#F87171',fontSize:12,cursor:'pointer',fontFamily:'Outfit,sans-serif' }}>
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── REVIEWS ── */}
        {tab==='reviews' && (
          <div>
            <div style={{ fontSize:13,color:'#9A8070',marginBottom:20 }}>
              {reviews.filter(r=>r.approved===0).length} pending approval · {reviews.filter(r=>r.approved===1).length} published
            </div>

            {reviews.length===0 && <div style={{ textAlign:'center',padding:'60px 0',color:'#9A8070' }}>No reviews submitted yet.</div>}

            {reviews.map(r => (
              <div key={r.id} style={{ background:'#1C140D',border:`1px solid ${r.approved?'rgba(200,136,74,0.15)':'rgba(248,113,113,0.15)'}`,borderRadius:14,padding:24,marginBottom:12,display:'grid',gridTemplateColumns:'1fr auto',gap:20,alignItems:'start' }}>
                <div>
                  <div style={{ display:'flex',alignItems:'center',gap:10,marginBottom:6,flexWrap:'wrap' }}>
                    <span style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:17,fontWeight:700,color:'#F0E8DC' }}>{r.name}</span>
                    {r.role && <span style={{ fontSize:12,color:'#9A8070' }}>{r.role}</span>}
                    <span style={{ fontSize:10,fontWeight:600,padding:'3px 9px',borderRadius:20,background: r.approved?'rgba(37,211,102,0.12)':'rgba(248,113,113,0.12)',color: r.approved?'#25D366':'#F87171',textTransform:'uppercase',letterSpacing:0.5 }}>
                      {r.approved ? '✓ Published' : '⏳ Pending'}
                    </span>
                  </div>
                  <div style={{ color:'#E8B820',fontSize:14,marginBottom:8 }}>{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</div>
                  <div style={{ fontSize:14,color:'#9A8070',lineHeight:1.7,fontStyle:'italic' }}>"{r.message}"</div>
                  <div style={{ fontSize:11,color:'#9A8070',marginTop:8 }}>Submitted: {formatDate(r.created_at)}</div>
                </div>
                <div style={{ display:'flex',flexDirection:'column',gap:8,minWidth:120 }}>
                  <button onClick={() => toggleApprove(r.id, r.approved)}
                    style={{ padding:'8px 12px',borderRadius:8,border:'none',cursor:'pointer',fontFamily:'Outfit,sans-serif',fontWeight:600,fontSize:12,
                      background: r.approved?'rgba(248,113,113,0.1)':'rgba(37,211,102,0.15)',
                      color: r.approved?'#F87171':'#25D366' }}>
                    {r.approved ? '⏸ Unpublish' : '✓ Approve'}
                  </button>
                  <button onClick={() => deleteReview(r.id)}
                    style={{ padding:'8px 12px',background:'rgba(248,113,113,0.08)',border:'1px solid rgba(248,113,113,0.15)',borderRadius:8,color:'#F87171',fontSize:12,cursor:'pointer',fontFamily:'Outfit,sans-serif' }}>
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media(max-width:768px){
          .stats-grid{grid-template-columns:repeat(2,1fr)!important}
          .overview-grid{grid-template-columns:1fr!important}
          .enq-card{grid-template-columns:1fr!important}
          div[style*="padding: 32px 32px"]{padding:20px!important}
        }
        @media(max-width:480px){.stats-grid{grid-template-columns:1fr!important}}
        select option{background:#1C140D}
        input:focus,select:focus{border-color:#C8884A!important}
      `}</style>
    </div>
  );
}
