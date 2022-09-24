import React from 'react';

import CustomizationBackground from './background/customization-background';
import CustomizationTimespan from './time-span/customization-timespan';
import CustomizationTopType from './top-type/customization-top-type';

interface ICustomizationProps {}

const Customization: React.FC<ICustomizationProps> = (props) => {
  const {} = props;

  return (
    <div className="mb-4 flex flex-col justify-center rounded-lg bg-white p-4 drop-shadow-2xl ">
      <h2 className="text-xl font-semibold text-black sm:text-2xl">Customize your picture</h2>
      {/* Timespan */}
      <CustomizationTimespan />
      {/* Top type */}
      <CustomizationTopType />
      {/* Background */}
      <CustomizationBackground />
    </div>
  );
};

export default Customization;
