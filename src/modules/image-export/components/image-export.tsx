import { IconButton } from '@modules/ui/components/icon-button/icon-button';
import { useToast } from '@modules/ui/components/toasts/context/toast-context';
import { USER_TOPS_MAX_RESULTS } from '@modules/user-tops/lib/user-tops.lib';
import React, { useEffect, useState } from 'react';

import useSaveImage from '../hooks/use-save-image';

type ImageExportProps = {
  resultImageRef: React.RefObject<HTMLDivElement>;
};

const ImageExport: React.FC<ImageExportProps> = (props) => {
  const { resultImageRef } = props;
  const { toast } = useToast();

  const [showButton, setShowButton] = useState<boolean>(false);

  const { saveImageToDevice } = useSaveImage(resultImageRef);

  const handleImageExport = async () => {
    try {
      await saveImageToDevice();
    } catch (error) {
      toast({ variant: 'error', content: 'An error ocurred while generating image!' });
    }
  };

  useEffect(() => {
    const showButtonDelay = USER_TOPS_MAX_RESULTS * 200;
    const timeoutID = setTimeout(() => {
      setShowButton(true);
    }, showButtonDelay);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <>
      {showButton ? (
        <div className="fade-in-animate fixed bottom-0 right-0 p-4">
          <IconButton
            aria-label="Export Image"
            colorScheme="secondary"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 stroke-black dark:stroke-white"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <polyline points="7 11 12 16 17 11" />
                <line x1="12" y1="4" x2="12" y2="16" />
              </svg>
            }
            onClick={handleImageExport}
          />
        </div>
      ) : null}
    </>
  );
};

export default ImageExport;
