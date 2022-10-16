import type { SpotifyArtistType, SpotifyTrackType, ToplyDataTimeSpanEnum } from '@typedefs/toply.typesdefs';
import { createContext, useContext, useReducer } from 'react';

import reducer from './reducer/reducer';
import type { DashboardActions, DashboardState } from './types';

interface IDashboardContextProps {
  state: DashboardState;
  dispatch: React.Dispatch<DashboardActions>;
}

const DashboardContext = createContext<IDashboardContextProps>({} as IDashboardContextProps);

interface IDashboardProviderProps {
  children: React.ReactNode;
}

const DashboardProvider: React.FC<IDashboardProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    contentLoading: false,
    artists: new Map<ToplyDataTimeSpanEnum, SpotifyArtistType[]>(),
    songs: new Map<ToplyDataTimeSpanEnum, SpotifyTrackType[]>(),
    selectedSong: null,
    selectedArtist: null,
  });

  return <DashboardContext.Provider value={{ state, dispatch }}>{children}</DashboardContext.Provider>;
};

export const useDashboardContext = () => {
  return useContext<IDashboardContextProps>(DashboardContext);
};

export default DashboardProvider;
