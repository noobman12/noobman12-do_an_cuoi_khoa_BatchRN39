/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dt-bookmax.myshopify.com", "content.bookoff.co.jp"], // Thêm tên miền của ảnh
  },
};

export default nextConfig;
