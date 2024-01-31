import { NextRequest, NextResponse } from 'next/server';
import { openDb } from '@/lib/db';
import { Connection } from '@/interface/connection';

export async function GET() {
  const db = await openDb();

  try {
    const connections = await db.all<Connection[]>('SELECT * from connections');
    return NextResponse.json(connections);
  } catch {
    console.error('Error: GET /api/connect');
  } finally {
    await db.close();
  }
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  const db = await openDb();

  try {
    const result = await db.run(
      'INSERT INTO connections (nickname, email, avatarId) VALUES (?, ?, ?)',
      req.nickname,
      req.email,
      req.avatarId
    );
    const inserted = await db.get<Connection>('SELECT * from connections WHERE id = ?', result.lastID);
    return NextResponse.json(inserted);
  } catch {
    console.error('Error: POST /api/connect');
  } finally {
    await db.close();
  }
}
