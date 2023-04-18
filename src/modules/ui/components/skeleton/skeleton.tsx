import clsx from 'clsx';
import React from 'react';

type SkeletonProps = {
  isLoaded: boolean;
  className?: string;
  children: React.ReactNode;
};

const Skeleton: React.FC<SkeletonProps> = (props) => {
  const { isLoaded, className = '', children, ...rest } = props;

  return (
    <div
      className={clsx(
        !isLoaded && 'skeleton fade-in-animate animate-blink cursor-default bg-gray-400 bg-clip-padding',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Skeleton;
