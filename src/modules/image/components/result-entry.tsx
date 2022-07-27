import React from 'react';

interface IResultEntryProps {
  name: string;
}

const ResultEntry: React.FC<IResultEntryProps> = (props) => {
  const { name } = props;

  return (
    <div className='w-full pb-1'>
      <span className='text-lg text-bold font-bold text-black'>{name}</span>
    </div>
  );
};

export default ResultEntry;
