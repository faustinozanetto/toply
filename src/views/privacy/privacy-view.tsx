import React from 'react';

interface IPrivacyViewProps {}

const PrivacyView: React.FC<IPrivacyViewProps> = (props) => {
  const {} = props;

  return (
    <div className='flex flex-col justify-center bg-white rounded-lg mb-4 p-4 w-full'>
      <h2 className='text-xl font-semibold text-black sm:text-2xl'>Privacy</h2>
      <p className='text-lg text-black font-medium mb-4'>
        Toply was developed using Spotify API and no other external service. By
        using Toply, you agree to display your name and the most listened songs
        on Spotify in the page.
      </p>
      <p className='text-lg text-black font-medium'>
        It is important to note that Toply <strong>will not</strong> store nor
        use your personal data in any way. Only your username and the most
        listened songs on Spotify will be displayed and accessed.
      </p>
    </div>
  );
};

export default PrivacyView;
