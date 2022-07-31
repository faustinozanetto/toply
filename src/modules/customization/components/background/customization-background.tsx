import React from 'react';
import { ToplyDataTimeStapEnum } from '@typedefs/toply.typesdefs';
import CustomizationBackgroundButton from './customization-background-button';

interface ICustomizationBackgroundProps {}

const CustomizationBackground: React.FC<ICustomizationBackgroundProps> = (props) => {
  const {} = props;

  return (
    <div className="flex flex-col justify-center">
      <h3 className="text-md text-semibold font-normal mb-1 sm:text-lg">Select a background color</h3>
      <CustomizationBackgroundButton />
    </div>
  );
};

export default CustomizationBackground;
