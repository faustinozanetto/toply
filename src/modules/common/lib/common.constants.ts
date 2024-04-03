/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
export const __PROD__: boolean = process.env.NODE_ENV === 'production';
export const __URL__: string = process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000';
