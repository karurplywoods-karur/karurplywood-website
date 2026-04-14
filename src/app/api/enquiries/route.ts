// src/app/api/enquiries/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, location, product, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 });
    }

    const db = getDb();
    const result = db.prepare(`
      INSERT INTO enquiries (name, phone, location, product, message)
      VALUES (?, ?, ?, ?, ?)
    `).run(name, phone, location || '', product || '', message || '');

    return NextResponse.json({ success: true, id: result.lastInsertRowid }, { status: 201 });
  } catch (err) {
    console.error('Enquiry POST error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const db = getDb();
  const enquiries = db.prepare(`SELECT * FROM enquiries ORDER BY created_at DESC`).all();
  return NextResponse.json(enquiries);
}
