import { MetadataRoute } from 'next';
import { blogPosts } from './blog/page';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sapgene.com';

  const staticRoutes = [
    '',
    '/about',
    '/generators',
    '/gallery',
    '/contact',
    '/rental-generators',
    '/solar-infrastructure',
    '/online-ups',
    '/servo-stabilizers',
    '/blog',
    '/legal',
    '/privacy-policy',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route === '/generators' ? 0.9 : 0.8,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...sitemapEntries, ...blogEntries];
}
