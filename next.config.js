const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname:"m.media-amazon.com" } 
    ],
    domains:["images.pexels.com", "fakestoreapi.com"],
 
  }
};

module.exports = nextConfig;
