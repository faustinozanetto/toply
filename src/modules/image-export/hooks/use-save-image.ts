import { useCustomization } from '@modules/customization/hooks/use-customization';
import { useToast } from '@modules/ui/components/toasts/context/toast-context';
import { toPng } from 'html-to-image';
import type { Options } from 'html-to-image/lib/types';
import { useCallback, useState } from 'react';

import { IMAGE_EXPORT_FILENAME, IMAGE_EXPORT_OFFSETS, IMAGE_EXPORT_QUALITY } from '../lib/image-export.lib';

interface UseSaveImageReturn {
  saveImageToDevice: () => Promise<void>;
  isSaving: boolean;
}

const useSaveImage = (elementRef: React.RefObject<HTMLDivElement> | null): UseSaveImageReturn => {
  const { state: customizationState } = useCustomization();

  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);

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
    try {
      setIsSaving(true);
      const imageData = await generateImageFromElement();

      const anchorElement = document.createElement('a');
      anchorElement.href = imageData;
      anchorElement.download = IMAGE_EXPORT_FILENAME;
      document.body.appendChild(anchorElement);
      anchorElement.click();
      document.body.removeChild(anchorElement);
      anchorElement.remove();

      toast({ variant: 'success', content: 'Image downloaded successfully!' });
    } catch (err) {
      toast({ variant: 'error', content: 'Could not download image!' });
    } finally {
      setIsSaving(false);
    }
  }, [elementRef, customizationState]);

  return {
    saveImageToDevice,
    isSaving,
  };
};

export default useSaveImage;
