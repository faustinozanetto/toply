import type { Track } from '@modules/user-tops/types/user-tops.types';

export interface TopTracksGetResponse {
  tracks?: Track[];
  error?: { message: string };
}
