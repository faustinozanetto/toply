import ResultExport from '@modules/result/components/result-export';
import Results from '@modules/result/components/results';
import SelectedItem from '@modules/selected-item/components/selected-item';
import LogoutButton from '@modules/user/components/logout-button';
import React, { useRef } from 'react';

import Customization from '../../customization/components/customization';

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = (props) => {
  const {} = props;
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <React.Fragment>
      <div className="flex w-full flex-col">
        {/* Customization */}
        <Customization />
        {/* Loading and results */}
        <div className="flex items-center justify-center" ref={containerRef}>
          <Results />
        </div>

        {/* Export button */}
        <div className="fixed right-0 bottom-5 grid grid-cols-1 gap-2 p-2">
          <ResultExport resultRef={containerRef} />
          {/* <ResultCopy resultRef={containerRef} /> */}
        </div>

        {/* Logout Button */}
        <div className="fixed left-0 bottom-5 p-2">
          <LogoutButton />
        </div>

        {/* Selected Item Modal */}
        <SelectedItem />
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
