import { handleImageGeneration, saveImageToFile } from '@lib/image-generation';
import { useCustomizationContext } from '@modules/customization/context/customization-context';
import React from 'react';

interface ResultExportProps {
  resultRef: React.RefObject<HTMLDivElement>;
}

const ResultExport: React.FC<ResultExportProps> = (props) => {
  const { resultRef } = props;
  const { state } = useCustomizationContext();

  /**
   * Handle the export of the image
   */
  const handleExport = () => {
    if (!resultRef.current) return;
    return handleImageGeneration(resultRef.current, state.backgroundColor).then(async (dataUrl) => {
      try {
        if (dataUrl) {
          await saveImageToFile(dataUrl);
        }
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <button
      type="button"
      className="inline-flex items-center justify-center overflow-hidden rounded-lg bg-pink-700 p-2 text-lg font-semibold text-white transition-colors hover:bg-pink-600 "
      aria-label="Export Image"
      id="export-photo"
      onClick={() => handleExport()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
        />
      </svg>
    </button>
  );
};

export default ResultExport;
