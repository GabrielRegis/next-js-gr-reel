import { NextResponse } from 'next/server'
import prisma from '../prisma';

export async function GET(request: Request) {
  const experiences = await prisma.workExperience.findMany({
    include: {
      Framework: true
    }
  })
  return NextResponse.json(experiences);
}
