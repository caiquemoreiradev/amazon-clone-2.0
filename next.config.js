
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["fakestoreapi.com", "links.papareact.com", "drive.google.com", "m.media-amazon.com"],
    },
    env: {
      stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    },
  };
  
  module.exports = nextConfig;