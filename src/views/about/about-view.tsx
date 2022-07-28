import React from 'react';

interface IAboutViewProps {}

const AboutView: React.FC<IAboutViewProps> = (props) => {
  const {} = props;

  return (
    <div className='flex flex-col justify-center bg-white rounded-lg mb-4 p-4 w-full'>
      <h2 className='text-xl font-semibold text-black sm:text-2xl'>About</h2>
      <p className='text-lg text-black font-medium'>
        Toply is a web application that lets you see the most listened songs on
        Spotify. It is simple and free to use, and it is also capable of
        generating a picture of your top songs that can be shared in your social
        media.
      </p>
    </div>
  );
};

export default AboutView;
