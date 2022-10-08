import useUserTops from '@hooks/use-user-tops';
import { ToplyTopItemsEnum } from '@typedefs/toply.typesdefs';
import React from 'react';

import CustomizationTopTypeButton from './customization-top-type-button';

interface ICustomizationTopTypeProps {}

const CustomizationTopType: React.FC<ICustomizationTopTypeProps> = (props) => {
  const {} = props;
  const { setTopType } = useUserTops();

  const handleTopTypeSelect = (topType: ToplyTopItemsEnum) => {
    setTopType(topType);
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
