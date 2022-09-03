import { signOut } from 'next-auth/react';
import React, { useCallback } from 'react';

interface ILogoutButtonProps {}

const LogoutButton: React.FC<ILogoutButtonProps> = (props) => {
  const {} = props;

  const handleLogout = useCallback(() => {
    signOut({ redirect: true, callbackUrl: '/' });
  }, []);

  return (
    <button
      className="inline-flex items-center justify-center overflow-hidden rounded-lg bg-purple-700 p-2 text-lg font-semibold text-white transition-colors hover:bg-purple-600 "
      aria-label="Export Image"
      id="export-photo"
      onClick={handleLogout}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    </button>
  );
};

export default LogoutButton;
