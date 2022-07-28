import React from 'react';

type ISkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const Skeleton: React.FC<ISkeletonProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <div className='animate-pulse bg-gray-400 rounded-lg w-full' {...rest}>
      {children}
    </div>
  );
};

export default Skeleton;
