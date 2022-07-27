import { fetchTopSongs, parseTimeSpan } from '@lib/spotify-helper';
import {
  setTopSongs,
  setTimeSpan,
  selectTimeSpan,
} from '@state/slices/toply.slice';
import { SpotifyTrackType } from '@typedefs/toply.typesdefs';
import { useSession } from 'next-auth/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomizationTimespan from './time-span/customization-timespan';

interface ICustomizationProps {}

const Customization: React.FC<ICustomizationProps> = (props) => {
  const {} = props;
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const timeSpan = useSelector(selectTimeSpan);

  const fetchSongs = () => {
    // @ts-ignore
    fetchTopSongs(session?.user.accessToken, timeSpan).then((data) => {
      dispatch(setTopSongs(data as SpotifyTrackType[]));
    });
  };

  return (
    <div className='flex flex-col bg-white p-4 mb-4 rounded-lg drop-shadow-2xl justify-center '>
      <h2 className='text-2xl font-semibold text-black'>
        Customize your picture
      </h2>
      {/* Timespan */}
      <CustomizationTimespan />

      <div className='flex flex-col mt-2 justify-center '>
        <button
          className='transition-colors inline-flex items-center justify-center p-1 overflow-hidden text-md font-semibold text-white rounded-lg bg-orange-700 hover:bg-orange-600 '
          aria-label='Load Data'
          onClick={() => {
            fetchSongs();
          }}
        >
          <span className='relative py-2 px-3'>Load </span>
        </button>
      </div>
    </div>
  );
};

export default Customization;
