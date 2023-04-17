import { NextResponse } from 'next/server'
import prisma from '../prisma';

export async function GET(request: Request) {
  const frameworks = await prisma.framework.findMany()
  return NextResponse.json(frameworks);
}
