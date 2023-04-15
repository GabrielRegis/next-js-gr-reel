import { NextResponse } from 'next/server'
import prisma from '../prisma';


export async function GET(request: Request) {
  const users = await prisma.user.findMany()
  return NextResponse.json(users);
}
