import { siteConfig } from 'config/config';

export default async function sitemap() {
  const routes = ['/', '/about', '/privacy', '/sign-in'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
