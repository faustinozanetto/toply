import { selectSelectedSong } from '@state/slices/toply.slice';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

const SelectedSongEmbed = () => {
  const selectedSong = useSelector(selectSelectedSong);

  /**
   * Generates the emebbed track linkg for the song.
   */
  const generateEmbedLink = useMemo(() => {
    if (!selectedSong.uri) return '';

    const trackId: string = selectedSong.uri.split(':')[2]!;
    const url: string = 'https://open.spotify.com/embed/track/'.concat(trackId);
    return url;
  }, [selectedSong]);

  return (
    <div className="mt-2 flex flex-1 flex-col items-stretch">
      <iframe className="h-20" src={generateEmbedLink}></iframe>
    </div>
  );
};

export default SelectedSongEmbed;
