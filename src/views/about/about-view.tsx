import React from 'react';

interface IAboutViewProps {}

const AboutView: React.FC<IAboutViewProps> = (props) => {
  const {} = props;

  return (
    <div className="mb-4 flex w-full flex-col justify-center rounded-lg bg-white p-4">
      <h2 className="text-xl font-semibold text-black sm:text-2xl">About</h2>
      <p className="text-lg font-medium text-black">
        Toply is a web application that lets you see the most listened songs on Spotify. It is simple and free to use,
        and it is also capable of generating a picture of your top songs that can be shared in your social media.
      </p>
    </div>
  );
};

export default AboutView;
