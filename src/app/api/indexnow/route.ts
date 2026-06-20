import { NextResponse } from 'next/server';
import { blogPosts } from '@/app/blog/page';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');
  
  if (token !== 'e72472cd1b4f4f9490dd460ee494ec6f') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const host = 'www.sapgene.com';
  const key = 'e72472cd1b4f4f9490dd460ee494ec6f';
  const keyLocation = `https://${host}/e72472cd1b4f4f9490dd460ee494ec6f.txt`;
  
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

  const urls = [
    ...staticRoutes.map(route => `https://${host}${route}`),
    ...blogPosts.map(post => `https://${host}/blog/${post.slug}`)
  ];

  const payload = {
    host,
    key,
    keyLocation,
    urlList: urls,
  };

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
  ];

  try {
    const results = await Promise.allSettled(
      endpoints.map(endpoint =>
        fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: JSON.stringify(payload),
        }).then(r => ({ endpoint, status: r.status, ok: r.ok }))
      )
    );

    const summary = results.map(r =>
      r.status === 'fulfilled' ? r.value : { endpoint: 'unknown', status: 0, ok: false }
    );

    return NextResponse.json({
      success: true,
      message: `Submitted ${urls.length} URLs to ${endpoints.length} endpoints.`,
      results: summary,
      submittedUrls: urls,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: 'Error submitting to IndexNow',
      error: error.message
    }, { status: 500 });
  }
}
