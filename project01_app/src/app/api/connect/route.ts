import { NextRequest, NextResponse } from 'next/server';
import { openDb } from '@/lib/db';
import { Connection } from '@/interface/connect';

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
  const data = await request.json();
  const db = await openDb();

  try {
    await db.run(
      'INSERT INTO connections (nickname, email, thumbnail) VALUES (?, ?, ?)',
      data.nickname,
      data.email,
      Number(data.thumbnail)
    );
    return NextResponse.json({ message: 'success', status: 201 });
  } catch {
    console.error('Error: POST /api/connect');
    return NextResponse.json({ message: 'fail', status: 500 });
  } finally {
    await db.close();
  }
}
