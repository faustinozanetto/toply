import Link from 'next/link';
import React from 'react';

interface INotFoundViewProps {}

const NotFoundView: React.FC<INotFoundViewProps> = (props) => {
  const {} = props;

  return (
    <div className='flex flex-col justify-center bg-white rounded-lg mb-4 p-4 w-full text-center'>
      <h2 className='text-3xl font-black text-black'>404</h2>
      <p className='text-lg text-black font-medium mb-4'>
        The page your requested does not seem to exist. If you think this may
        not be correct, please contact us.
      </p>
      <div className='flex items-center justify-center'>
        <Link href='/' passHref>
          <button className='inline-flex items-center justify-center mt-2 p-1.5 overflow-hidden text-md font-semibold text-white rounded-lg  bg-rose-700 hover:bg-pink-600'>
            <span className='relative px-2.5 py-1.5'>Goto Home</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default NotFoundView;
