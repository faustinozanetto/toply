import React from 'react';

interface IResultImageProps {
  rotation: string;
}

const ResultImage: React.FC<IResultImageProps> = (props) => {
  const { rotation } = props;

  return (
    <div
      className='block w-[320px] p-2 bg-white border-white border-4'
      style={{ transform: `rotate(${rotation})` }}
    >
      {/* Image Content */}
      <div className='w-full mb-2'>
        <img src='/assets/images/polaroid.png' alt='polaroid' />
      </div>

      {/* Bottom */}
      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
    </div>
  );
};

export default ResultImage;
