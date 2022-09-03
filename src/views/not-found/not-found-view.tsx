import Link from 'next/link';
import React from 'react';

interface INotFoundViewProps {}

const NotFoundView: React.FC<INotFoundViewProps> = (props) => {
  const {} = props;

  return (
    <div className="mb-4 flex w-full flex-col justify-center rounded-lg bg-white p-4 text-center">
      <h2 className="text-3xl font-black text-black">404</h2>
      <p className="mb-4 text-lg font-medium text-black">
        The page your requested does not seem to exist. If you think this may not be correct, please contact us.
      </p>
      <div className="flex items-center justify-center">
        <Link href="/" passHref>
          <button className="mt-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-rose-700 p-1.5 text-base font-semibold  text-white hover:bg-pink-600">
            <span className="relative px-2.5 py-1.5">Goto Home</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default NotFoundView;
