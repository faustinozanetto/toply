import { z } from 'zod';

import type { SpotifyTokensResponse, SpotifyUserDetailsResponse } from '../types/auth.types';

// Constants for cookies and token duration
export const ACCESS_TOKEN_COOKIE = 'accessToken';
export const CODE_VERIFIER_COOKIE = 'codeVerifier';
export const TOKEN_DURATION = 3600; // 1 hour;

// Spotify API endpoints
const SPOTIFY_ACCESS_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const SPOTIFY_AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize';

// Validation schema for the code verifier
export const setVerifierSchema = z.object({
  code: z.string({ required_error: 'Code is required!' }),
});

// Function to generate a random string of a given length
const generateRandomString = (length: number) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

// Function to base64 encode data
const base64Encode = (toEncode: ArrayBuffer) => {
  // @ts-ignore
  return btoa(String.fromCharCode.apply(null, new Uint8Array(toEncode)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
};

// Function to generate the code challenge
const generateCodeChallenge = async (codeVerifier: string) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);

  return base64Encode(digest);
};

// Generate a random code verifier
const codeVerifier = generateRandomString(128);

// Function to get Spotify authorization URL
export const getSpotifyAuthorizationUrl = async (): Promise<{ url: string; verifier: string }> => {
  const codeChallenge = await generateCodeChallenge(codeVerifier);
  const state = generateRandomString(16);

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: process.env.NEXT_PUBLIC_AUTH_SPOTIFY_CLIENT_ID!,
    scope: 'user-top-read',
    redirect_uri: process.env.NEXT_PUBLIC_AUTH_SPOTIFY_REDIRECT_URL!,
    state,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
  });

  const url = `${SPOTIFY_AUTHORIZE_ENDPOINT}?${params}`;
  return { url, verifier: codeVerifier };
};

// Function to exchange code for tokens
export const getSpotifyTokens = async (code: string, codeVerifierReq: string): Promise<SpotifyTokensResponse> => {
  const requestBody = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: process.env.NEXT_PUBLIC_AUTH_SPOTIFY_REDIRECT_URL!,
    client_id: process.env.NEXT_PUBLIC_AUTH_SPOTIFY_CLIENT_ID!,
    code_verifier: codeVerifierReq,
  });

  const response = await fetch(SPOTIFY_ACCESS_TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: requestBody,
  });

  if (!response.ok) {
    throw new Error('Failed to request access token!');
  }

  const data = await response.json();
  const tokens: SpotifyTokensResponse = {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
  };
  return tokens;
};

// Function to get user details from Spotify
export const getSpotifyUserDetails = async (accessToken: string): Promise<SpotifyUserDetailsResponse> => {
  const response = await fetch('https://api.spotify.com/v1/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to request user details!');
  }

  const data = await response.json();
  const userData: SpotifyUserDetailsResponse = {
    username: data.display_name,
  };
  return userData;
};
