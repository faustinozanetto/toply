import { useUserCustomizationContext } from '@modules/customization/context/user-customization-context';
import { toPng } from 'html-to-image';
import type { Options } from 'html-to-image/lib/types';
import { useCallback } from 'react';

import { IMAGE_EXPORT_FILENAME, IMAGE_EXPORT_OFFSETS, IMAGE_EXPORT_QUALITY } from '../lib/image-export.lib';

type UseSaveImageAPI = {
  saveImageToDevice: () => Promise<void>;
};

const useSaveImage = (elementRef: HTMLDivElement | null): UseSaveImageAPI => {
  const { state: customizationState } = useUserCustomizationContext();

  const generateImageFromElement = async () => {
    if (!elementRef) throw new Error('An error ocurred!');

    const options: Options = {
      width: elementRef.clientWidth + IMAGE_EXPORT_OFFSETS[0],
      height: elementRef.clientHeight + IMAGE_EXPORT_OFFSETS[1],
      style: {
        background: customizationState.background,
        padding: '1rem',
        margin: '0',
      },
      pixelRatio: IMAGE_EXPORT_QUALITY,
    };

    const converted = await toPng(elementRef, options);
    return converted;
  };

  const saveImageToDevice = useCallback(async () => {
    const imageData = await generateImageFromElement();

    const anchorElement = document.createElement('a');
    anchorElement.href = imageData;
    anchorElement.download = IMAGE_EXPORT_FILENAME;
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
  }, [elementRef]);

  return {
    saveImageToDevice,
  };
};

export default useSaveImage;
