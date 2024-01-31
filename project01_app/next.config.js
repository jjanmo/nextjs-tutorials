/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/300',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/connect',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
