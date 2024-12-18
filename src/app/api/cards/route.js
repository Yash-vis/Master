import { NextResponse } from 'next/server';
import { cards } from '../../utils/cards';

export function GET() {
  const data = cards  
  return NextResponse.json(data,{status:210});
}