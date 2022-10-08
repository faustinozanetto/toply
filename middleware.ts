import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/dashboard') {
    const session = await getToken({ req, secret: process.env.SECRET });
    if (!session) return NextResponse.redirect('/api/auth/signin');
  }
  return NextResponse.next();
}
