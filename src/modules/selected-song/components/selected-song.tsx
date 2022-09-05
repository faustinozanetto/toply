import { Dialog, Transition } from '@headlessui/react';
import { selectSelectedSong, setSelectedSong } from '@state/slices/toply.slice';
import Image from 'next/image';
import React, { Fragment, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SelectedSongContext } from '../context/selected-song-context';

const SelectedSong: React.FC = () => {
  const dispatch = useDispatch();
  const selectedSong = useSelector(selectSelectedSong);
  const { showModal, setShowModal } = useContext(SelectedSongContext);

  const handleModalClose = (): void => {
    dispatch(setSelectedSong({}));
    setShowModal(false);
  };

  if (!selectedSong) return null;

  const songName = (): React.ReactNode => {
    if (!selectedSong.name) return null;

    return (
      <h4 className="text-lg font-semibold leading-6 text-gray-900 sm:text-xl">Album: {selectedSong.album?.name}</h4>
    );
  };

  /**
   *
   * @returns the corresponding react jsx code.
   */
  const songArtists = (): React.ReactNode => {
    if (!selectedSong.artists?.length) return null;

    return (
      <h4 className="text-lg font-semibold leading-6 text-gray-900 sm:text-xl">
        Arists
        <ul className="font-normal text-black">
          {selectedSong.artists.map((artist) => {
            return <li key={artist.id}>{artist.name}</li>;
          })}
        </ul>
      </h4>
    );
  };

  return (
    <>
      {showModal && (
        <Transition appear show={showModal} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={handleModalClose} open={showModal}>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center drop-shadow-2xl">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md overflow-hidden rounded-2xl bg-gray-100 p-6 text-left align-middle shadow-xl transition-all">
                    <Image
                      src={selectedSong?.album?.images[1]?.url!}
                      alt={selectedSong.name}
                      layout="responsive"
                      width={200}
                      height={200}
                    />
                    <div className="flex flex-col">
                      <Dialog.Title as="h3" className="text-xl font-bold leading-6 text-gray-900 sm:text-2xl">
                        {selectedSong.name}
                      </Dialog.Title>

                      {/* Song Details */}
                      <div>
                        {/* Name */}
                        {songName()}
                        {/* Artists */}
                        {songArtists()}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
};

export default SelectedSong;
