import React from 'react';

interface IPrivacyViewProps {}

const PrivacyView: React.FC<IPrivacyViewProps> = (props) => {
  const {} = props;

  return (
    <div className="mb-4 flex w-full flex-col justify-center rounded-lg bg-white p-4">
      <h2 className="text-xl font-semibold text-black sm:text-2xl">Privacy</h2>
      <p className="mb-4 text-lg font-medium text-black">
        Toply was developed using Spotify API and no other external service. By using Toply, you agree to display your
        name and the most listened songs on Spotify in the page.
      </p>
      <p className="text-lg font-medium text-black">
        It is important to note that Toply <strong>will not</strong> store nor use your personal data in any way. Only
        your username and the most listened songs on Spotify will be displayed and accessed.
      </p>
    </div>
  );
};

export default PrivacyView;
