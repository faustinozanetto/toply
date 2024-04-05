import type { TopTracksGetResponse } from '@modules/api/types/api.types';
import { authOptions } from '@modules/auth/lib/auth-options';
import { getTopTracks, USER_TOPS_MAX_RESULTS } from '@modules/user-tops/lib/user-tops.lib';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

export async function GET(): Promise<NextResponse<TopTracksGetResponse>> {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse('Unauthorized', { status: 403 });
    }

    const topTracks = await getTopTracks(session.access_token, 'long_term', USER_TOPS_MAX_RESULTS);

    return NextResponse.json({ data: { topTracks, username: session.user.name } });
  } catch (err) {
    let errorMessage = 'An error occurred!';
    if (err instanceof Error) errorMessage = err.message;

    return NextResponse.json({ error: { message: errorMessage } }, { status: 500 });
  }
}
