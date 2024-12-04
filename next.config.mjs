/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/auth',
        destination: '/auth/login',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
