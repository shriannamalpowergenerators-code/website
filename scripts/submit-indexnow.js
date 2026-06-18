const https = require('https');

const host = 'www.sapgene.com';
const key = '7ec78198547643a79b64eaf80a51eb41';
const keyLocation = `https://${host}/${key}.txt`;

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

const blogPosts = [
  'choosing-right-generator-home',
  'industrial-vs-residential-generators',
  'maintenance-tips-generators',
  'benefits-cummins-generators'
];

const urls = [
  ...staticRoutes.map(route => `https://${host}${route}`),
  ...blogPosts.map(slug => `https://${host}/blog/${slug}`)
];

const data = JSON.stringify({
  host,
  key,
  keyLocation,
  urlList: urls
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(data)
  }
};

console.log(`Submitting ${urls.length} URLs to IndexNow for host ${host}...`);

const req = https.request(options, (res) => {
  console.log(`IndexNow status code: ${res.statusCode}`);
  let responseData = '';
  res.on('data', (chunk) => {
    responseData += chunk;
  });
  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log('IndexNow submission successful (Queued)!');
    } else {
      console.error(`IndexNow submission failed with response: ${responseData}`);
    }
  });
});

req.on('error', (error) => {
  console.error('Error submitting to IndexNow:', error);
});

req.write(data);
req.end();
