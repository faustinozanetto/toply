declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    NEXT_PUBLIC_SPOTIFY_CLIENT_ID: string;
    SPOTIFY_CLIENT_SECRET: string;
    NEXT_PUBLIC_SPOTIFY_REDIRECT_URI: string;
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: string;
  }
}

interface Window {
  dataLayer: unknown[];
  gtag: (action: string, name: unknown, parameters?: unknown) => void;
}
