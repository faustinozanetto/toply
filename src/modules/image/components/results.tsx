import React from 'react';
import ResultImage from './result-image';

interface IResultsProps {}

const Results: React.FC<IResultsProps> = (props) => {
  const {} = props;

  return (
    <>
      <ResultImage rotation='10deg' startingIndex={0} />
      <ResultImage rotation='-10deg' startingIndex={5} />
    </>
  );
};

export default Results;
