import { NextResponse } from 'next/server';
import { openDb } from '@/lib/db';
import { Connection } from '@/interface/connection';

export async function GET() {
  const db = await openDb();
  const connections = await db.all<Connection[]>('SELECT * from connections');

  return NextResponse.json(connections);
}
