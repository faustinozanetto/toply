import React from 'react';
import CustomizationTimespanButton from './customization-timespan-button';
import { ToplyDataTimeStapEnum } from '@typedefs/toply.typesdefs';

interface ICustomizationTimespanProps {}

const CustomizationTimespan: React.FC<ICustomizationTimespanProps> = (
  props
) => {
  const {} = props;

  return (
    <>
      <div className='flex flex-col items-center justify-center text-center pb-4'>
        <h3 className='text-xl text-semibold font-normal'>
          Select the time span of the data
        </h3>
      </div>
      <div className='grid grid-cols-3 gap-2 md:gap-4'>
        <CustomizationTimespanButton timeSpan={ToplyDataTimeStapEnum.MONTH} />
        <CustomizationTimespanButton
          timeSpan={ToplyDataTimeStapEnum.SEMESTER}
        />
        <CustomizationTimespanButton timeSpan={ToplyDataTimeStapEnum.ALLTIME} />
      </div>
    </>
  );
};

export default CustomizationTimespan;
