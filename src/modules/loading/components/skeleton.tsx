import React from 'react';

type ISkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const Skeleton: React.FC<ISkeletonProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <div className="w-full animate-pulse rounded-lg bg-gray-400" {...rest}>
      {children}
    </div>
  );
};

export default Skeleton;
