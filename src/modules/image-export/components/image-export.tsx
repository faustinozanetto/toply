import { Button } from '@modules/ui/components/button/button';
import { DownloadIcon } from '@modules/ui/components/icons/download-icon';
import { LoadingIcon } from '@modules/ui/components/icons/loading-icon';
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
  const { saveImageToDevice, isSaving } = useSaveImage(resultImageRef);

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
        <Button aria-label="Export Image" onClick={handleImageExport} className="fade-in-animate" size="icon">
          {isSaving ? <LoadingIcon /> : <DownloadIcon />}
        </Button>
      ) : null}
    </>
  );
};

export default ImageExport;
