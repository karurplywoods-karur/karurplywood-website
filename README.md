# 🪵 Karur Plywood & Company — Website

A complete Next.js 14 website with SQLite database, WhatsApp integration, Admin Dashboard, and local SEO optimization.

---

## ✅ Features

| Feature | Details |
|---|---|
| 6 Pages | Home, About, Products, Blog, Location, Contact |
| WhatsApp Widget | Interactive chat with 6 pre-filled quick messages |
| Enquiry Form | Saves to SQLite DB + opens WhatsApp automatically |
| Review System | Public submission → Admin approval → Live on site |
| Product Gallery | Filterable image gallery with lightbox |
| Admin Dashboard | Login-protected: view enquiries, update status, manage reviews |
| Google Maps | Real embed via env variable |
| Local SEO | Meta tags, OpenGraph, structured data ready |

---

## 🚀 Step-by-Step Setup (Intermediate)

### Step 1 — Install Node.js
Download from https://nodejs.org (LTS version)

### Step 2 — Unzip and open the project
```bash
cd karur-plywood-website
```

### Step 3 — Install dependencies
```bash
npm install
```

### Step 4 — Initialize the database
```bash
npm run db:init
```
This creates `data/karurplywood.db` with sample data.

### Step 5 — Configure your details
Edit `.env.local`:
```
NEXT_PUBLIC_WA_NUMBER=91XXXXXXXXXX        ← Your WhatsApp number
NEXT_PUBLIC_PHONE=+91 XXXXX XXXXX        ← Display phone
NEXT_PUBLIC_EMAIL=you@yourdomain.com      ← Your email
NEXT_PUBLIC_ADDRESS=Your full address     ← Shop address
NEXT_PUBLIC_GMAPS_EMBED_URL=...           ← Google Maps embed URL (see below)
ADMIN_PASSWORD=yourchosenpassword         ← Change this!
JWT_SECRET=any-random-32-char-string      ← Change this!
```

**How to get Google Maps Embed URL:**
1. Go to maps.google.com
2. Search for your shop location
3. Click Share → Embed a map
4. Copy the `src="..."` URL from the iframe code
5. Paste it as `NEXT_PUBLIC_GMAPS_EMBED_URL`

### Step 6 — Run locally
```bash
npm run dev
```
Open http://localhost:3000

### Step 7 — Admin Dashboard
Go to http://localhost:3000/admin  
Password: whatever you set in `ADMIN_PASSWORD` (default: `karurplywood2025`)

---

## 🌐 Publishing to Vercel (FREE) + GoDaddy Domain

### Why Vercel + GoDaddy?
- GoDaddy = just buy the domain (e.g. karurplywood.com) — ~₹800/year
- Vercel = host the website for FREE
- You point your GoDaddy domain to Vercel

### Step 1 — Push code to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
# Create a repo on github.com, then:
git remote add origin https://github.com/yourusername/karur-plywood.git
git push -u origin main
```

### Step 2 — Deploy to Vercel
1. Go to https://vercel.com → Sign up with GitHub
2. Click "New Project" → Import your GitHub repo
3. Vercel auto-detects Next.js — click Deploy
4. Your site is live at `yourproject.vercel.app`

### Step 3 — Add environment variables in Vercel
In Vercel dashboard → Settings → Environment Variables
Add ALL the variables from your `.env.local` file

**Important for production database:**
Since Vercel is serverless, use a hosted SQLite alternative.
Add this to Vercel env:
```
DATABASE_URL=file:./data/karurplywood.db
```
Or upgrade to Turso (free SQLite hosting): https://turso.tech

### Step 4 — Connect GoDaddy domain to Vercel
1. In Vercel: Project Settings → Domains → Add Domain → type `karurplywood.com`
2. Vercel gives you DNS records (A record + CNAME)
3. In GoDaddy: My Domains → DNS → Add those records
4. Wait 10–30 minutes for DNS to propagate
5. ✅ Your site is live at karurplywood.com!

---

## 📁 Project Structure

```
karur-plywood/
├── src/
│   ├── app/
│   │   ├── page.tsx              ← Home page
│   │   ├── about/page.tsx        ← About page
│   │   ├── products/page.tsx     ← Products + Gallery + FAQ
│   │   ├── blog/page.tsx         ← Blog listing
│   │   ├── location/page.tsx     ← Location + Maps
│   │   ├── contact/page.tsx      ← Contact + Enquiry form
│   │   ├── admin/
│   │   │   ├── page.tsx          ← Admin login
│   │   │   └── dashboard/page.tsx ← Admin dashboard
│   │   └── api/
│   │       ├── enquiries/        ← Enquiry CRUD API
│   │       ├── reviews/          ← Reviews CRUD API
│   │       ├── auth/             ← Login/logout
│   │       └── admin/stats/      ← Dashboard stats
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppWidget.tsx    ← Interactive WA chat
│   │   ├── EnquiryForm.tsx       ← DB + WA form
│   │   ├── ReviewForm.tsx        ← Public review submission
│   │   └── Gallery.tsx           ← Filterable image gallery
│   └── lib/
│       ├── db.ts                 ← SQLite singleton
│       └── auth.ts               ← JWT auth
├── scripts/
│   └── init-db.js                ← Database setup script
├── data/                         ← SQLite database (auto-created)
├── .env.local                    ← Your configuration
└── package.json
```

---

## 🔧 Customization Checklist

- [ ] Update phone number in `.env.local`
- [ ] Update address in `.env.local`
- [ ] Add Google Maps embed URL in `.env.local`
- [ ] Change admin password in `.env.local`
- [ ] Replace brand photos with real showroom photos
- [ ] Add real product images to gallery via database
- [ ] Update business founding year in About page

---

## 📞 Quick Reference

| URL | Page |
|---|---|
| `/` | Home |
| `/products` | Products |
| `/about` | About |
| `/blog` | Blog |
| `/location` | Location |
| `/contact` | Contact |
| `/admin` | Admin Login |
| `/admin/dashboard` | Admin Dashboard |

WhatsApp number format: `919999999999` (country code + number, no +, no spaces)
