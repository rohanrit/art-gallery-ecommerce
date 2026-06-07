/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@alignartistry/ui'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
};

module.exports = nextConfig;
