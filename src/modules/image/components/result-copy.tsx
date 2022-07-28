import { trackEvent } from '@lib/google';
import {
  copyImageToClipboard,
  handleImageGeneration,
  saveImageToFile,
} from '@lib/image-generation';
import React, { useCallback } from 'react';

interface ResultCopyProps {
  resultRef: React.RefObject<HTMLDivElement>;
}

const ResultCopy: React.FC<ResultCopyProps> = (props) => {
  const { resultRef } = props;

  /**
   * Handle the export of the image
   */
  const handleCopy = useCallback(() => {
    if (resultRef && resultRef.current) {
      return handleImageGeneration(resultRef.current, true).then(
        async (dataUrl) => {
          try {
            if (dataUrl) {
              copyImageToClipboard(dataUrl);
              trackEvent('Home', 'Save Photo');
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
      className='transition-colors inline-flex items-center justify-center p-2 overflow-hidden text-lg font-semibold text-white rounded-lg bg-red-700 hover:bg-red-600 '
      aria-label='Copy Image'
      onClick={handleCopy}
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
          d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
        />
      </svg>
    </button>
  );
};

export default ResultCopy;
