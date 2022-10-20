import type { DashboardActions, DashboardState } from '../types';
import { DashboardActionType } from '../types';

const reducer = (state: DashboardState, action: DashboardActions): DashboardState => {
  switch (action.type) {
    case DashboardActionType.SET_CONTENT_LOADING: {
      return {
        ...state,
        contentLoading: action.payload.loading,
      };
    }
    case DashboardActionType.SET_ARTISTS: {
      const prevArtists = state.artists;
      prevArtists.set(action.payload.artists.timeSpan, action.payload.artists.data);
      return {
        ...state,
        artists: prevArtists,
      };
    }
    case DashboardActionType.SET_SONGS: {
      const prevSongs = state.songs;
      prevSongs.set(action.payload.songs.timeSpan, action.payload.songs.data);
      return {
        ...state,
        songs: prevSongs,
      };
    }
    case DashboardActionType.SET_SELECTED_ARTIST: {
      return {
        ...state,
        selectedArtist: action.payload.artist,
      };
    }
    case DashboardActionType.SET_SELECTED_SONG: {
      return {
        ...state,
        selectedSong: action.payload.song,
      };
    }
    default:
      throw new Error('Unknown action type');
  }
};

export default reducer;
