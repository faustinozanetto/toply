import { Button } from '@modules/ui/components/button/button';
import Link from 'next/link';
import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="mx-4 flex w-full flex-col items-center md:mx-0">
      <div className="my-6 w-full rounded-lg border p-4 shadow-lg sm:px-6 md:my-14 md:max-w-lg md:p-6 lg:my-20">
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-center text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">Privacy</h1>
          <p className="mb-2 text-muted-foreground">
            Toply was developed using Spotify API and no other external service. By using Toply, you agree to display
            your name and the most listened songs on Spotify in the page.
          </p>
          <p className="mb-4 text-muted-foreground">
            It is important to note that Toply <strong>will not</strong> store nor use your personal data in any harmful
            and unwanted way. We only fetch your username and top artists from the Spotify API.
          </p>

          <Button asChild>
            <Link className="w-full" href="/">
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
