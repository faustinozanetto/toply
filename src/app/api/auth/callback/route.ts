import {
  ACCESS_TOKEN_COOKIE,
  CODE_VERIFIER_COOKIE,
  getSpotifyTokens,
  TOKEN_DURATION,
} from '@modules/auth/lib/auth-options';
import { __URL__ } from '@modules/common/lib/common.constants';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get('code');

    if (!code) return NextResponse.json({ error: { message: 'Code is missing!' } }, { status: 500 });

    const cookieStore = cookies();
    const codeVerifier = cookieStore.get(CODE_VERIFIER_COOKIE);
    if (!codeVerifier) return NextResponse.json({ error: { message: 'Code verifier is missing!' } }, { status: 500 });

    const { accessToken } = await getSpotifyTokens(code, codeVerifier.value);

    cookieStore.set(ACCESS_TOKEN_COOKIE, accessToken, {
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: TOKEN_DURATION,
    });

    return NextResponse.redirect(__URL__);
  } catch (err) {
    let errorMessage = 'An error occurred!';
    if (err instanceof Error) errorMessage = err.message;

    return NextResponse.json({ error: { message: errorMessage } }, { status: 500 });
  }
}
