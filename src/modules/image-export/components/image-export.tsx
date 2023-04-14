import { IconButton } from '@modules/ui/components/icon-button/icon-button';
import React from 'react';

import useSaveImage from '../hooks/use-save-image';

type ImageExportProps = {
  resultImageRef: React.RefObject<HTMLDivElement>;
};

const ImageExport: React.FC<ImageExportProps> = (props) => {
  const { resultImageRef } = props;

  const { saveImageToDevice } = useSaveImage(resultImageRef.current);

  const handleImageExport = () => {
    try {
      saveImageToDevice();
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="fixed bottom-0 right-0 p-4">
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
  );
};

export default ImageExport;
