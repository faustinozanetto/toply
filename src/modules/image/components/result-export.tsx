import { trackEvent } from '@lib/google';
import {
  handleImageGeneration,
  openImageInBrowser,
  saveImageToFile,
} from '@lib/image-generation';
import React, { useCallback } from 'react';

interface ResultExportProps {
  resultRef: React.RefObject<HTMLDivElement>;
}

const ResultExport: React.FC<ResultExportProps> = (props) => {
  const { resultRef } = props;

  /**
   * Handle the export of the image
   */
  const handleExport = useCallback(() => {
    if (resultRef && resultRef.current) {
      alert('here');
      return handleImageGeneration(resultRef.current, true).then(
        async (dataUrl) => {
          try {
            if (dataUrl) {
              alert('Image exported!');
              openImageInBrowser(dataUrl);
              trackEvent('Home', 'exportPhoto');
            }
          } catch (error) {
            console.error(error);
          }
        }
      );
    }
  }, [resultRef]);

  return (
    <button
      className='transition-colors inline-flex items-center justify-center p-2 overflow-hidden text-lg font-semibold text-white rounded-lg bg-pink-700 hover:bg-pink-600 '
      aria-label='Export Image'
      id='export-photo'
      onClick={handleExport}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-8 w-8'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth='2'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4'
        />
      </svg>
    </button>
  );
};

export default ResultExport;
