import AuthSignIn from '@modules/auth/components/auth-sign-in';
import { Button } from '@modules/ui/components/button/button';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign In',
};

export default function AuthSignInPage(): React.JSX.Element {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Button asChild className="absolute left-4 top-4">
        <Link href="/">
          <svg
            className="mr-2 size-5 stroke-current"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <line x1="5" x2="19" y1="12" y2="12" />
            <line x1="5" x2="11" y1="12" y2="18" />
            <line x1="5" x2="11" y1="12" y2="6" />
          </svg>
          Go Back
        </Link>
      </Button>
      <AuthSignIn />
    </div>
  );
}
