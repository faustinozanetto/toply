import { useCustomizationContext } from '@modules/customization/context/customization-context';
import { CustomizationActionType } from '@modules/customization/context/types';
import { ToplyTopItemsEnum } from '@typedefs/toply.typesdefs';
import React from 'react';

import CustomizationTopTypeButton from './customization-top-type-button';

interface ICustomizationTopTypeProps {}

const CustomizationTopType: React.FC<ICustomizationTopTypeProps> = (props) => {
  const {} = props;
  const { dispatch } = useCustomizationContext();

  const handleTopTypeSelect = (topType: ToplyTopItemsEnum) => {
    dispatch({
      type: CustomizationActionType.SET_TOP_TYPE,
      payload: {
        topType,
      },
    });
  };

  return (
    <div className="flex flex-col justify-center pb-1">
      <h3 className="mb-1 text-base font-normal sm:text-lg">Select the type of top you want</h3>

      <div className="grid grid-cols-1 gap-2 md:gap-4 xs:grid-cols-2">
        {Object.values(ToplyTopItemsEnum).map((topType, index) => {
          return (
            <CustomizationTopTypeButton
              key={index + topType}
              topType={topType}
              onTopTypeSelected={() => {
                handleTopTypeSelect(topType);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CustomizationTopType;
