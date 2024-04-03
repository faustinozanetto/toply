import type { Track } from '@modules/user-tops/types/user-tops.types';

export interface TopTracksGetResponse {
  data?: { topTracks: Track[]; username: string };
  error?: { message: string };
}
