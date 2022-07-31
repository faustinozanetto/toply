import React from 'react';
import CustomizationBackground from './background/customization-background';
import CustomizationTimespan from './time-span/customization-timespan';

interface ICustomizationProps {}

const Customization: React.FC<ICustomizationProps> = (props) => {
  const {} = props;

  return (
    <div className="flex flex-col bg-white p-4 mb-4 rounded-lg drop-shadow-2xl justify-center ">
      <h2 className="text-xl font-semibold text-black sm:text-2xl">Customize your picture</h2>
      {/* Timespan */}
      <CustomizationTimespan />
      {/* Background */}
      <CustomizationBackground />
    </div>
  );
};

export default Customization;
