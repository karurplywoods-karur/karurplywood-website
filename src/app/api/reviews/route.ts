// src/app/api/reviews/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { name, role, rating, message } = await req.json();
    if (!name || !rating || !message) {
      return NextResponse.json({ error: 'Name, rating and message are required.' }, { status: 400 });
    }
    const db = getDb();
    db.prepare(`INSERT INTO reviews (name, role, rating, message, approved) VALUES (?,?,?,?,0)`)
      .run(name, role || '', rating, message);
    return NextResponse.json({ success: true, message: 'Thank you! Your review will appear after approval.' }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const db = getDb();
  const url = new URL(req.url);
  const all = url.searchParams.get('all');
  const session = all ? await getAdminSession() : null;

  if (all && !session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const reviews = all
    ? db.prepare(`SELECT * FROM reviews ORDER BY created_at DESC`).all()
    : db.prepare(`SELECT * FROM reviews WHERE approved = 1 ORDER BY created_at DESC`).all();

  return NextResponse.json(reviews);
}
