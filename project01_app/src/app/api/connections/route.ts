import { NextRequest, NextResponse } from 'next/server';
import { openDb } from '@/lib/db';
import { Connection } from '@/interface/connection';

export async function GET() {
  const db = await openDb();
  try {
    const connections = await db.all<Connection[]>('SELECT * from connections');
    return NextResponse.json(connections);
  } catch {
    console.error('Error: GET /api/connections');
  } finally {
    await db.close();
  }
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  console.log('😀', req); // body 값

  // const db = await openDb();
  // try{
  //   await db.run('INSERT INTO connections (nickname, email, avatarId) VALUES (?, ?, ?)', request.body.nickname, request.body.email, request.body.avatarId);
  // }

  return NextResponse.json(req);
}
