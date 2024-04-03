import { siteConfig } from 'config/config';

export default function robots(): {
  rules: {
    userAgent: string;
  }[];
  sitemap: string;
  host: string;
} {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
