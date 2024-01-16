import { NextResponse } from 'next/server';
import data from '@/app/api/data.json';

export async function GET() {
  return NextResponse.json(data.connections);
}
