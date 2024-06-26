import type { TopTracksGetResponse } from '@modules/api/types/api.types';
import { ACCESS_TOKEN_COOKIE } from '@modules/auth/lib/auth-options';
import { getTopTracks, USER_TOPS_MAX_RESULTS } from '@modules/user-tops/lib/user-tops.lib';
import type { SpotifyTopTimeRange } from '@modules/user-tops/types/user-tops.types';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(req: NextRequest): Promise<NextResponse<TopTracksGetResponse>> {
  try {
    const cookiesStore = cookies();
    const accessToken = cookiesStore.get(ACCESS_TOKEN_COOKIE);

    if (!accessToken) {
      return new NextResponse('Unauthorized', { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const timeRange: SpotifyTopTimeRange =
      (searchParams.get('time_range') as SpotifyTopTimeRange | undefined) ?? 'medium_term';

    const tracks = await getTopTracks(accessToken.value, timeRange, USER_TOPS_MAX_RESULTS);

    return NextResponse.json({ tracks });
  } catch (err) {
    let errorMessage = 'An error occurred!';
    if (err instanceof Error) errorMessage = err.message;

    return NextResponse.json({ error: { message: errorMessage } }, { status: 500 });
  }
}
