/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'd33609liqwio9r.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'web-launch2.vercel.app',
      },
    ],
  },
};

export default nextConfig;
