import useUserTops from '@hooks/use-user-tops';
import { useCustomizationContext } from '@modules/customization/context/customization-context';
import { useDashboardContext } from '@modules/dashboard/context/dashboard-context';
import Skeleton from '@modules/ui/components/skeleton/skeleton';
import { ToplyTopItemsEnum } from '@typedefs/toply.typesdefs';
import React from 'react';

import ResultItem from './result-item';

interface IResultPhotoProps {}

const ResultPhoto: React.FC<IResultPhotoProps> = (props) => {
  const {} = props;
  const { state: dashboardState } = useDashboardContext();
  const { state: customizationState } = useCustomizationContext();
  const { songs, results, artists, updateSelectedSong, updateSelectedArtist } = useUserTops();

  const handleItemSelected = (id: string): void => {
    if (customizationState.topType === ToplyTopItemsEnum.SONGS) {
      const matchingSong = songs().find((song) => song.id === id);
      if (matchingSong) {
        updateSelectedSong(matchingSong);
      } else console.log('no  matchin song');
    } else {
      const matchingArtist = artists().find((artist) => artist.id === id);
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
        {results()?.map((item, index) => (
          <Skeleton key={item.id} isLoaded={!dashboardState.contentLoading}>
            <ResultItem
              index={index}
              id={item.id}
              name={item.name}
              image={item.image}
              blurImage={item.blurImage}
              onSelected={handleItemSelected}
            />
          </Skeleton>
        ))}
      </div>
      <div className="mt-2 font-bold text-black opacity-60">https://toply.vercel.app/</div>
    </div>
  );
};

export default ResultPhoto;
