import ResultExport from '@modules/image/components/result-export';
import Results from '@modules/image/components/results';
import LogoutButton from '@modules/user/components/logout-button';
import React, { useRef } from 'react';
import Customization from '../../customization/components/customization';

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = (props) => {
  const {} = props;
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col w-full">
      {/* Customization */}
      <Customization />
      {/* Loading and results */}
      <div className="flex items-center justify-center" ref={containerRef}>
        <Results />
      </div>

      {/* Export button */}
      <div className="grid grid-cols-1 gap-2 fixed right-0 bottom-5 p-2">
        <ResultExport resultRef={containerRef} />
        {/* <ResultCopy resultRef={containerRef} /> */}
      </div>

      {/* Logout Button */}
      <div className="fixed left-0 bottom-5 p-2">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Dashboard;
