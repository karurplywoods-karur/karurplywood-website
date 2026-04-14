// src/app/api/reviews/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { approved } = await req.json();
  const db = getDb();
  db.prepare(`UPDATE reviews SET approved = ? WHERE id = ?`).run(approved ? 1 : 0, params.id);
  return NextResponse.json({ success: true });
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const db = getDb();
  db.prepare(`DELETE FROM reviews WHERE id = ?`).run(params.id);
  return NextResponse.json({ success: true });
}
