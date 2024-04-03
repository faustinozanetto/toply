import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export const config = {
  matcher: ['/'],
};

export default async function middleware(req: NextRequest): Promise<NextResponse> {
  const session = await getToken({
    req,
    cookieName: 'toply.session-token',
  });

  if (!session) {
    const signInUrl = new URL('/sign-in', req.url);
    signInUrl.searchParams.set('next', req.nextUrl.pathname);

    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.rewrite(req.nextUrl);
}
