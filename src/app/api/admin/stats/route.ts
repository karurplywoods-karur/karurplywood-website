// src/app/api/admin/stats/route.ts
import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export async function GET() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const db = getDb();

  const totalEnquiries = (db.prepare(`SELECT COUNT(*) as c FROM enquiries`).get() as any).c;
  const newEnquiries   = (db.prepare(`SELECT COUNT(*) as c FROM enquiries WHERE status='new'`).get() as any).c;
  const totalReviews   = (db.prepare(`SELECT COUNT(*) as c FROM reviews`).get() as any).c;
  const pendingReviews = (db.prepare(`SELECT COUNT(*) as c FROM reviews WHERE approved=0`).get() as any).c;

  const recentEnquiries = db.prepare(
    `SELECT * FROM enquiries ORDER BY created_at DESC LIMIT 5`
  ).all();

  const byProduct = db.prepare(
    `SELECT product, COUNT(*) as count FROM enquiries GROUP BY product ORDER BY count DESC`
  ).all();

  return NextResponse.json({
    totalEnquiries,
    newEnquiries,
    totalReviews,
    pendingReviews,
    recentEnquiries,
    byProduct,
  });
}
