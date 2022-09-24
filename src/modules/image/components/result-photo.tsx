import { selectSongs, selectTimeSpan } from '@state/slices/app.slice';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import ResultTrack from './result-track';

interface IResultPhotoProps {}

const ResultPhoto: React.FC<IResultPhotoProps> = (props) => {
  const {} = props;
  const songs = useSelector(selectSongs);
  const timeSpan = useSelector(selectTimeSpan);

  const resultTracks = useMemo(() => {
    return songs.get(timeSpan) ?? [];
  }, [songs, timeSpan]);

  return (
    <div
      className="w-full rounded-lg p-4"
      style={{
        filter: 'sepia(0.35)',
        backgroundImage: `url(/assets/images/rough-paper.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
      }}
    >
      <div className="grid grid-cols-3 gap-2">
        {resultTracks.map((song, index) => (
          <ResultTrack key={song.id} track={song} index={index} />
        ))}
      </div>
      <div className="mt-2 font-bold text-black opacity-60">https://toply.vercel.app/</div>
    </div>
  );
};

export default ResultPhoto;
