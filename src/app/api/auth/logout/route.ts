import { ACCESS_TOKEN_COOKIE, CODE_VERIFIER_COOKIE } from '@modules/auth/lib/auth-options';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const cookieStore = cookies();

    cookieStore.delete(CODE_VERIFIER_COOKIE);
    cookieStore.delete(ACCESS_TOKEN_COOKIE);

    return NextResponse.json({ success: true });
  } catch (err) {
    let errorMessage = 'An error occurred!';
    if (err instanceof Error) errorMessage = err.message;

    return NextResponse.json({ error: { message: errorMessage } }, { status: 500 });
  }
}
