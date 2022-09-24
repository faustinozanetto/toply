import { Dialog, Transition } from '@headlessui/react';
import useUserTops from '@hooks/use-user-tops';
import { ToplyTopItemsEnum } from '@typedefs/toply.typesdefs';
import React, { Fragment, useContext, useEffect, useMemo } from 'react';

import { SelectedSongContext } from '../context/selected-song-context';
import SelectedItemArtist from './selected-item-artist';
import SelectedItemSong from './selected-item-song';

const SelectedItem: React.FC = () => {
  const userTops = useUserTops();
  const { showModal, setShowModal } = useContext(SelectedSongContext);

  useEffect(() => {
    setTimeout(() => {
      document.documentElement.style.paddingRight = '0px';
    }, 10);
  }, [showModal]);

  const handleModalClose = (): void => {
    setShowModal(false);
  };

  const renderItemContents = useMemo(() => {
    if (userTops.topType === ToplyTopItemsEnum.SONGS) return <SelectedItemSong selectedSong={userTops.selectedSong!} />;
    return <SelectedItemArtist selectedArtist={userTops.selectedArtist!} />;
  }, [userTops.selectedSong, userTops.selectedArtist]);

  return (
    <>
      {showModal && (
        <Transition appear show={showModal} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={handleModalClose} open={showModal}>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center text-center drop-shadow-2xl">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-xs overflow-hidden rounded-2xl bg-gray-100 p-6 text-left align-middle shadow-xl transition-all sm:max-w-sm">
                    {renderItemContents}
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

export default SelectedItem;
