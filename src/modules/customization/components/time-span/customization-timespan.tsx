import { useCustomizationContext } from '@modules/customization/context/customization-context';
import { CustomizationActionType } from '@modules/customization/context/types';
import { ToplyDataTimeSpanEnum } from '@typedefs/toply.typesdefs';
import React from 'react';

import CustomizationTimespanButton from './customization-timespan-button';

interface ICustomizationTimespanProps {}

const CustomizationTimespan: React.FC<ICustomizationTimespanProps> = (props) => {
  const {} = props;
  const { dispatch } = useCustomizationContext();

  const handleTimeSpanSelect = (timeSpan: ToplyDataTimeSpanEnum) => {
    dispatch({
      type: CustomizationActionType.SET_TIME_SPAN,
      payload: {
        topTimeSpan: timeSpan,
      },
    });
  };

  return (
    <div className="flex flex-col justify-center pb-1">
      <h3 className="mb-1 text-base font-normal sm:text-lg">Select the time span of the data</h3>

      <div className="grid grid-cols-1 gap-2 md:gap-4 xs:grid-cols-3 ">
        {Object.values(ToplyDataTimeSpanEnum).map((timeSpan, index) => {
          return (
            <CustomizationTimespanButton
              key={index + timeSpan}
              timeSpan={timeSpan}
              onTimeSpanSelected={() => {
                handleTimeSpanSelect(timeSpan);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CustomizationTimespan;
