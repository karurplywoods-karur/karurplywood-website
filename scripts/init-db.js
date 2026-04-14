// scripts/init-db.js
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const dbDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });

const db = new Database(path.join(dbDir, 'karurplywood.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS enquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    location TEXT,
    product TEXT,
    message TEXT,
    status TEXT DEFAULT 'new',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    role TEXT,
    rating INTEGER NOT NULL CHECK(rating BETWEEN 1 AND 5),
    message TEXT NOT NULL,
    approved INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS gallery (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    category TEXT,
    image_url TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Seed sample reviews
const existingReviews = db.prepare('SELECT COUNT(*) as count FROM reviews').get();
if (existingReviews.count === 0) {
  const insertReview = db.prepare(`
    INSERT INTO reviews (name, role, rating, message, approved) VALUES (?,?,?,?,1)
  `);
  insertReview.run('Rajan K.', 'Carpenter, Karur', 5, "Best plywood dealer in Karur, no doubt. I've been buying from them for 8 years for all my carpentry work. Genuine products, good prices and they know exactly what you need.");
  insertReview.run('Meena S.', 'Homeowner, Trichy', 5, 'Ordered plywood for my new house construction. They gave me a great bulk rate and delivered on time. The quality was excellent. Will recommend to all my friends.');
  insertReview.run('Suresh M.', 'Interior Contractor, Namakkal', 5, 'Very helpful staff, wide variety of laminates to choose from. Got exactly what I needed for my kitchen cabinets. Will come back again!');
  insertReview.run('Priya R.', 'Homeowner, Karur', 4, 'Good quality products and knowledgeable staff. They helped me choose the right plywood thickness for my bedroom wardrobe. Delivery was on time too.');
  insertReview.run('Kumar B.', 'Builder, Erode', 5, 'We have been sourcing all our plywood from Karur Plywood for 3 years now. Consistent quality, honest pricing and they always have stock ready. Highly recommended for bulk orders.');
  console.log('✅ Sample reviews seeded');
}

// Seed sample gallery
const existingGallery = db.prepare('SELECT COUNT(*) as count FROM gallery').get();
if (existingGallery.count === 0) {
  const insertGallery = db.prepare(`INSERT INTO gallery (title, category, image_url, sort_order) VALUES (?,?,?,?)`);
  insertGallery.run('Plywood Stack — BWR Grade', 'plywood', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', 1);
  insertGallery.run('Door Collection', 'doors', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', 2);
  insertGallery.run('Laminate Sheet Designs', 'laminates', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', 3);
  insertGallery.run('Hardware Fittings', 'hardware', 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80', 4);
  insertGallery.run('Our Showroom', 'showroom', 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80', 5);
  insertGallery.run('CenturyPly Stock', 'plywood', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', 6);
  console.log('✅ Sample gallery seeded');
}

// Seed sample enquiry
const existingEnq = db.prepare('SELECT COUNT(*) as count FROM enquiries').get();
if (existingEnq.count === 0) {
  db.prepare(`INSERT INTO enquiries (name, phone, location, product, message, status) VALUES (?,?,?,?,?,?)`).run(
    'Sample Customer', '+91 98765 43210', 'Karur', 'Plywood (BWR / MR / Commercial)', 'I need 20 sheets of 18mm BWR plywood for my kitchen.', 'new'
  );
  console.log('✅ Sample enquiry seeded');
}

console.log('✅ Database initialized at data/karurplywood.db');
db.close();
