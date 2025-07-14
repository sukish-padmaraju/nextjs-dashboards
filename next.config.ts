// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   experimental: {
//     ppr: 'incremental',
//   }
// };

// export default nextConfig;
//--------------------------------------------
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Enable only valid and supported experimental features here
    serverActions: true, // example: enable Server Actions if you're using them
    typedRoutes: true,   // example: enable typed routes in App Router
  },
};

module.exports = nextConfig;
