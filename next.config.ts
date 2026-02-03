import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 启用React严格模式
  reactStrictMode: true,
  // 图像优化配置
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // TypeScript配置
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
