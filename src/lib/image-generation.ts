import { toBlob, toPng } from 'html-to-image';
import type { Options } from 'html-to-image/lib/options';

/*
 * Generates the actual image using the correct quality and styling.
 */
export const handleImageGeneration = async (elementRef: HTMLDivElement) => {
  if (!elementRef) {
    return;
  }

  const options: Options = {
    height: elementRef.clientHeight + 100,
    width: elementRef.clientWidth,
    style: {
      background: 'linear-gradient(to right, #6366f1, #a855f7, #ec4899)',
      padding: '0',
      margin: '0',
      border: '0',
    },
    pixelRatio: 2,
    quality: 1,
  };

  return toPng(elementRef, options);
};

/**
 * Tries to create an a element for the image and click it to trigger the download.
 * @param dataUrl url from the generated image.
 */
export const saveImageToFile = (dataUrl: string | Blob): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      const link = document.createElement('a');
      const NAME = 'Toply';
      link.download = `${NAME}.png`;
      link.href = dataUrl as string;
      link.click();
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Asks for permission and creates the clipboard object with the image data and then tries to copy it to the clipboard.
 * @param dataUrl url from the generated image.
 * @returns a promise containing the result of the copy operation.
 */
export const copyImageToClipboard = async (
  dataUrl: string | Blob
): Promise<void> => {
  const IS_FIREFOX = !(navigator.userAgent.indexOf('Firefox') < 0);
  if (!IS_FIREFOX) {
    navigator.permissions
      // @ts-ignore
      .query({ name: 'clipboard-write' })
      .then(async (result) => {
        if (result.state === 'granted') {
          const type = 'image/png';
          const data = [new ClipboardItem({ [type]: dataUrl })];
          return navigator.clipboard.write(data);
        }
      });
  }
};
