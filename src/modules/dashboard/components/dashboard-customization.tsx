import React from 'react';

interface IDashboardCustomizationProps {}

const DashboardCustomization: React.FC<IDashboardCustomizationProps> = (
  props
) => {
  const {} = props;

  return (
    <div className='flex flex-col bg-white p-4 mb-4 rounded-lg drop-shadow-2xl justify-center '>
      <h2 className='text-2xl font-semibold text-black'>
        Customize your picture
      </h2>
    </div>
  );
};

export default DashboardCustomization;
