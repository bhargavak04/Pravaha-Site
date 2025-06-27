/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pravaha.vercel.app',
  generateRobotsTxt: true, // (optional)
  // ...other options
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
