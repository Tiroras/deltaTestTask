/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.rawg.io"],
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
