import { Button } from '@modules/ui/components/button/button';
import { useToast } from '@modules/ui/components/toasts/context/toast-context';
import { useRouter } from 'next/navigation';
import React from 'react';

const AuthLogout: React.FC = () => {
  const router = useRouter();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      const respone = await fetch('/api/auth/logout', { method: 'POST' });
      const data = await respone.json();
      if (data.success) router.push('/sign-in');
    } catch (error) {
      toast({ variant: 'error', content: 'Failed to sign out!' });
    }
  };

  return (
    <Button aria-label="Logout" onClick={handleSignOut} variant="destructive-ghost" size="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 stroke-black dark:stroke-white"
        viewBox="0 0 24 24"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
        <path d="M7 12h14l-3 -3m0 6l3 -3" />
      </svg>
    </Button>
  );
};

export default AuthLogout;
