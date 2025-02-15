/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    }
  },
  webpack: (config) => {
    config.externals.push({
			// Fixes for authkit-nextjs: https://github.com/workos/authkit-nextjs/issues/187
      'node:crypto': 'commonjs crypto',
      'node:https': 'commonjs https',
      'node:http': 'commonjs http',
    });
    return config;
  },
};

export default nextConfig;
