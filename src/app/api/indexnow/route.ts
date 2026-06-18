import { NextResponse } from 'next/server';
import { blogPosts } from '@/app/blog/page';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');
  
  if (token !== '7ec78198547643a79b64eaf80a51eb41') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const host = 'www.sapgene.com';
  const key = '7ec78198547643a79b64eaf80a51eb41';
  const keyLocation = `https://${host}/7ec78198547643a79b64eaf80a51eb41.txt`;
  
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

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return NextResponse.json({ 
        success: true, 
        message: `Successfully submitted ${urls.length} URLs to IndexNow.`,
        submittedUrls: urls 
      });
    } else {
      const errorText = await response.text();
      return NextResponse.json({ 
        success: false, 
        message: 'IndexNow submission failed', 
        details: errorText 
      }, { status: response.status });
    }
  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      message: 'Error submitting to IndexNow', 
      error: error.message 
    }, { status: 500 });
  }
}
