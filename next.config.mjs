/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/auth',
        destination: '/auth/login',
        permanent: true, // або false, якщо це може змінитися
      },
    ];
  },
};

export default nextConfig;
