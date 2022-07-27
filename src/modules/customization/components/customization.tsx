import { ToplyDataTimeStapEnum } from '@typedefs/toply.typesdefs';
import React from 'react';
import CustomizationTimespanButton from './customization-timespan-button';

interface ICustomizationProps {}

const Customization: React.FC<ICustomizationProps> = (props) => {
  const {} = props;

  return (
    <div className='flex flex-col bg-white p-4 mb-4 rounded-lg drop-shadow-2xl justify-center '>
      <h2 className='text-2xl font-semibold text-black'>
        Customize your picture
      </h2>
      {/* Timespan */}
      <div className='flex flex-col items-center justify-center text-center pb-4'>
        <h3 className='text-xl text-semibold font-normal'>
          Select the time span of the data
        </h3>
      </div>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4'>
        <CustomizationTimespanButton timeSpan={ToplyDataTimeStapEnum.MONTH} />
        <CustomizationTimespanButton
          timeSpan={ToplyDataTimeStapEnum.SEMESTER}
        />
        <CustomizationTimespanButton timeSpan={ToplyDataTimeStapEnum.ALLTIME} />
      </div>
    </div>
  );
};

export default Customization;
