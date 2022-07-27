import { NEXTAUTH_SECRET } from '@lib/constants';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next();
  }

  if (!token && pathname !== '/auth/signin') {
    return NextResponse.redirect('/auth/signin');
  }
}
