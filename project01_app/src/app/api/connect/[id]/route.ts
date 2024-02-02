import { openDb } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  const db = await openDb();

  try {
    const result = await db.get('SELECT * from connections WHERE id = ?', id);
    return NextResponse.json(result);
  } catch (e) {
    console.error(`Error: GET /api/connect/${id}`);
  } finally {
    await db.close();
  }
}
