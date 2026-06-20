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

  const priorityMap: Record<string, number> = {
    '': 1.0,
    '/generators': 0.95,
    '/rental-generators': 0.9,
    '/about': 0.85,
    '/contact': 0.9,
    '/blog': 0.8,
  };

  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: priorityMap[route] ?? 0.75,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...sitemapEntries, ...blogEntries];
}
