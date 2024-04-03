import { Button } from '@modules/ui/components/button/button';
import Link from 'next/link';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="mx-4 flex w-full flex-col items-center md:mx-0">
      <div className="my-6 w-full rounded-lg border p-4 shadow-lg sm:px-6 md:my-14 md:max-w-lg md:p-6 lg:my-20">
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-center text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">Privacy</h1>
          <p className="mb-4 text-muted-foreground">
            Toply is a web application that lets you see the most listened songs on Spotify. It is simple and free to
            use, and it is also capable of generating a picture of your top songs that can be shared in your social
            media.
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

export default AboutPage;
