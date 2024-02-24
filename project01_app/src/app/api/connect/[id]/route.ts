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

export async function PATCH(request: NextRequest) {
  // const data = await request.json();
  // const db = await openDb();
  // try {
  //   const result = await db.run('UPDATE connections  id = ?', id);
  //   return NextResponse.json(result);
  // } catch (e) {
  //   console.error(`Error: GET /api/connect/${id}`);
  // } finally {
  //   await db.close();
  // }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const db = await openDb();

  try {
    const result = await db.run('DELETE FROM connections WHERE id = ?', id);
    return NextResponse.json(result);
  } catch (e) {
    console.error(`Error: DELET /api/connect/${id}`);
  } finally {
    await db.close();
  }
}
