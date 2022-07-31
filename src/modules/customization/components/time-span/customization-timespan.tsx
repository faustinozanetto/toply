import React from 'react';
import CustomizationTimespanButton from './customization-timespan-button';
import { ToplyDataTimeStapEnum } from '@typedefs/toply.typesdefs';

interface ICustomizationTimespanProps {}

const CustomizationTimespan: React.FC<ICustomizationTimespanProps> = (props) => {
  const {} = props;

  return (
    <div className="flex flex-col justify-center pb-1">
      <h3 className="text-md text-semibold font-normal  mb-1 sm:text-lg">Select the time span of the data</h3>

      <div className="grid grid-cols-1 gap-2 xs:grid-cols-3 md:gap-4 ">
        <CustomizationTimespanButton timeSpan={ToplyDataTimeStapEnum.MONTH} />
        <CustomizationTimespanButton timeSpan={ToplyDataTimeStapEnum.SEMESTER} />
        <CustomizationTimespanButton timeSpan={ToplyDataTimeStapEnum.ALLTIME} />
      </div>
    </div>
  );
};

export default CustomizationTimespan;
