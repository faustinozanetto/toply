import { toBlob, toJpeg } from 'html-to-image';
import type { Options } from 'html-to-image/lib/types';
/*
 * Generates the actual image using the correct quality and styling.
 */
export const handleImageGeneration = async (
  elementRef: HTMLDivElement,
  backgroundColor: string,
  isBlob: boolean = false
) => {
  if (!elementRef) {
    return;
  }

  const options: Options = {
    height: elementRef.clientHeight + 75,
    width: elementRef.clientWidth + 25,
    style: {
      background: backgroundColor,
      padding: '0',
      margin: '0',
      border: '0',
    },
    pixelRatio: 1.5,
  };

  // Generate the image.
  if (!isBlob) return toJpeg(elementRef, options);
  return toBlob(elementRef, options);
};

/**
 * Tries to create an a element for the image and click it to trigger the download.
 * @param dataUrl url from the generated image.
 */
export const saveImageToFile = (dataUrl: string | Blob): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      const a = document.createElement('a');
      if (typeof dataUrl === 'string') {
        a.href = dataUrl;
        a.download = 'Toply.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        resolve();
      }
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
export const copyImageToClipboard = async (dataUrl: string | Blob): Promise<void> => {
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

/**
 *
 * @param dataUrl url from the generated image.
 * @returns a promise containing the result of the open operation.
 */
export const openImageInBrowser = (dataUrl: Blob | string): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      const data = window.URL.createObjectURL(dataUrl as Blob);
      const win = window.open(data, 'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
      if (win) {
        win.focus();
        resolve();
      }
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
