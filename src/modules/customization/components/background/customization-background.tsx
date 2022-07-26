import React from 'react';

import CustomizationBackgroundButton from './customization-background-button';

interface ICustomizationBackgroundProps {}

const CustomizationBackground: React.FC<ICustomizationBackgroundProps> = (props) => {
  const {} = props;

  return (
    <div className="flex flex-col justify-center">
      <h3 className="mb-1 text-base font-normal sm:text-lg">Select a background color</h3>
      <CustomizationBackgroundButton />
    </div>
  );
};

export default CustomizationBackground;
