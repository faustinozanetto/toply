import { CODE_VERIFIER_COOKIE, setVerifierSchema, TOKEN_DURATION } from '@modules/auth/lib/auth-options';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const cookieStore = cookies();

    const { code } = setVerifierSchema.parse(body);

    cookieStore.set(CODE_VERIFIER_COOKIE, code, {
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: TOKEN_DURATION,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    let errorMessage = 'An error occurred!';
    if (err instanceof Error) errorMessage = err.message;

    return NextResponse.json({ error: { message: errorMessage } }, { status: 500 });
  }
}
