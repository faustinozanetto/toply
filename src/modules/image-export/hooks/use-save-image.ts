import { useUserCustomizationContext } from '@modules/customization/context/user-customization-context';
import { toPng } from 'html-to-image';
import type { Options } from 'html-to-image/lib/types';
import { useCallback } from 'react';

import { IMAGE_EXPORT_FILENAME, IMAGE_EXPORT_OFFSETS, IMAGE_EXPORT_QUALITY } from '../lib/image-export.lib';

type UseSaveImageAPI = {
  saveImageToDevice: () => Promise<void>;
};

const useSaveImage = (elementRef: React.RefObject<HTMLDivElement> | null): UseSaveImageAPI => {
  const { state: customizationState } = useUserCustomizationContext();

  const generateImageFromElement = useCallback(async () => {
    if (!elementRef || !elementRef.current) throw new Error('An error ocurred while generating image!');

    const options: Options = {
      width: elementRef.current.clientWidth + IMAGE_EXPORT_OFFSETS[0],
      height: elementRef.current.clientHeight + IMAGE_EXPORT_OFFSETS[1],
      style: {
        background: customizationState.background,
        padding: '1rem',
        margin: '0',
      },
      cacheBust: true,
      includeQueryParams: true,
      pixelRatio: IMAGE_EXPORT_QUALITY,
    };

    const converted = await toPng(elementRef.current, options);
    return converted;
  }, [elementRef, customizationState]);

  const saveImageToDevice = useCallback(async () => {
    const imageData = await generateImageFromElement();

    const anchorElement = document.createElement('a');
    anchorElement.href = imageData;
    anchorElement.download = IMAGE_EXPORT_FILENAME;
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
  }, [elementRef, customizationState]);

  return {
    saveImageToDevice,
  };
};

export default useSaveImage;
