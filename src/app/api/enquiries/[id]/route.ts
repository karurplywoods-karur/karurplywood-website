// src/app/api/enquiries/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { status } = await req.json();
  const db = getDb();
  db.prepare(`UPDATE enquiries SET status = ? WHERE id = ?`).run(status, params.id);
  return NextResponse.json({ success: true });
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const db = getDb();
  db.prepare(`DELETE FROM enquiries WHERE id = ?`).run(params.id);
  return NextResponse.json({ success: true });
}
