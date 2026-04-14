// src/lib/db.ts
import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (db) return db;

  const dbDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });

  db = new Database(path.join(dbDir, 'karurplywood.db'));

  // Auto-create tables if not exist
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

  return db;
}
