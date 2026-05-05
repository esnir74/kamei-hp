/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Cloudflare Pagesと互換性を保つため
  },
};

export default nextConfig;
