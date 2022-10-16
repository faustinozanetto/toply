import { Disclosure } from '@headlessui/react';
import React from 'react';

import CustomizationBackground from './background/customization-background';
import CustomizationTimespan from './time-span/customization-timespan';
import CustomizationTopType from './top-type/customization-top-type';

interface ICustomizationProps {}

const Customization: React.FC<ICustomizationProps> = (props) => {
  const {} = props;

  return (
    <div className="mb-4 flex flex-col justify-center rounded-lg bg-white p-4 drop-shadow-2xl ">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between">
              <h2 className="text-xl font-semibold text-black sm:text-2xl">Customize your picture</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`${open ? 'rotate-180' : ''} h-6 w-6 text-purple-500`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel className="mt-2">
              {/* Timespan */}
              <CustomizationTimespan />
              {/* Top type */}
              <CustomizationTopType />
              {/* Background */}
              <CustomizationBackground />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Customization;
