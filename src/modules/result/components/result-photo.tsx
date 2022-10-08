import useUserTops from '@hooks/use-user-tops';
import { ToplyTopItemsEnum } from '@typedefs/toply.typesdefs';
import React, { useMemo } from 'react';

import ResultItem from './result-item';

interface IResultPhotoProps {}

/** Internal interface used to treat results as a generic item  result. */
interface IResultType {
  id: string;
  name: string;
  image: string;
  blurImage: string;
}

const ResultPhoto: React.FC<IResultPhotoProps> = (props) => {
  const {} = props;
  const { songs, artists, topType, updateSelectedSong, updateSelectedArtist } = useUserTops();

  /**
   * Memoizes the results to display, wether they are artists or songs.
   */
  const resultItems = useMemo(() => {
    let results: IResultType[] = [];
    if (topType === ToplyTopItemsEnum.SONGS) {
      results = songs.map((song) => {
        return {
          id: song.id,
          name: song.name,
          image: song.album.images[0]?.url!,
          blurImage: song.album.images[2]?.url!,
        };
      });
    } else {
      results = artists.map((artist) => {
        return {
          id: artist.id,
          name: artist.name,
          image: artist.images[0]?.url!,
          blurImage: artist.images[2]?.url!,
        };
      });
    }
    console.log('called');
    return results;
  }, [songs, artists]);

  const handleItemSelected = (id: string): void => {
    if (topType === ToplyTopItemsEnum.SONGS) {
      const matchingSong = songs.find((song) => song.id === id);
      if (matchingSong) {
        updateSelectedSong(matchingSong);
      }
    } else {
      const matchingArtist = artists.find((artist) => artist.id === id);
      if (matchingArtist) {
        updateSelectedArtist(matchingArtist);
      }
    }
  };

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
        {resultItems.map((item, index) => (
          <ResultItem
            key={item.id}
            index={index}
            id={item.id}
            name={item.name}
            image={item.image}
            blurImage={item.blurImage}
            onSelected={handleItemSelected}
          />
        ))}
      </div>
      <div className="mt-2 font-bold text-black opacity-60">https://toply.vercel.app/</div>
    </div>
  );
};

export default ResultPhoto;
