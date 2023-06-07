// sitemap.js

const fs = require('fs');
const { create } = require('xmlbuilder2');

const routes = [
  '/',
  '/about',
  '/products',
  '/products/chargers',
  '/blog',
  '/blog/1',
'/blog/2',
  '/pick',
  '/products/type1',
  '/products/type2',
  '/products/tesla',
  '/products/gbt',
  '/products/adapters',
  '/products/adapters/ac',
  '/products/adapters/dc',
  '/services',
  '/services/installation',
  '/services/roadside-charging-service',
  '/products/1',
  '/products/2',
  '/products/3',
  '/products/4',
  '/products/5',
  '/products/6',
  '/products/7',
  '/products/11',
];

const baseUrl = 'https://www.mevcharger.com';

const sitemap = create({ version: '1.0', encoding: 'UTF-8' })
  .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

routes.forEach((route) => {
  const url = `${baseUrl}${route}`;
  sitemap.ele('url').ele('loc').txt(url);
});

const sitemapXml = sitemap.end({ prettyPrint: true });

fs.writeFileSync('./public/sitemap.xml', sitemapXml, 'utf8');
