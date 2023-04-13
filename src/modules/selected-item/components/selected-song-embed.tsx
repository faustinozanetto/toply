import type { SpotifyTrackType } from '@typedefs/toply.typesdefs';
import React, { useMemo } from 'react';

interface ISelectedSongEmbedProps {
  selectedSong: SpotifyTrackType;
}

const SelectedSongEmbed: React.FC<ISelectedSongEmbedProps> = (props) => {
  const { selectedSong } = props;

  /**
   * Generates the emebbed track linkg for the song.
   */
  const generateEmbedLink = useMemo(() => {
    const trackId: string = selectedSong.uri.split(':')[2]!;
    const path: string = `https://open.spotify.com/embed/track/${trackId}`;
    return new URL(path).href;
  }, [selectedSong]);

  return (
    <div id="embed-iframe" className="mt-2 flex flex-1 flex-col items-stretch">
      <iframe className="h-20" title="Spotify Web Player" src={generateEmbedLink} frameBorder={0} />
    </div>
  );
};

export default SelectedSongEmbed;
