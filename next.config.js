/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async redirects() {
      return [
        {
          source: '/signin',
          destination: '/auth/signin',
          permanent: true,
        },
        {
          source: '/signup',
          destination: '/auth/signup',
          permanent: true,
        },
      ];
    },
  };
